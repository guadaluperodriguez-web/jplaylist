// ✿ playlist for someone special ✿
// "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night." — W. Shakespeare

const CLIENT_ID   = '468b70e8b6864bddac9fdf9405afcbf9';
const CLIENT_SECRET = '6e91ed9239354b33aa08ab39a406a7f5';
const PLAYLIST_ID = '1quqeV4Flj7Vnu5cmVWD47';

let tracks       = [];
let currentIndex = 0;
let isPlaying    = false;
let token        = null;
let iframeReady  = false;

// DOM refs
const carousel     = document.getElementById('carousel');
const npTitle      = document.getElementById('npTitle');
const npArtist     = document.getElementById('npArtist');
const tracklist    = document.getElementById('tracklist');
const loadingMsg   = document.getElementById('tracklistLoading');
const embedWrap    = document.getElementById('spotifyEmbed');
const playBtn      = document.getElementById('playBtn');
const playIcon     = document.getElementById('playIcon');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');
const prevTrackBtn = document.getElementById('prevTrackBtn');
const nextTrackBtn = document.getElementById('nextTrackBtn');
const blob1        = document.getElementById('blob1');
const blob2        = document.getElementById('blob2');
const blob3        = document.getElementById('blob3');
const tabListen    = document.getElementById('tabListen');
const tabSongs     = document.getElementById('tabSongs');
const panelSongs   = document.getElementById('panelSongs');

// ── SVG icons
const PLAY_SVG  = `<path d="M8 5v14l11-7z"/>`;
const PAUSE_SVG = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

// ── 1. Spotify token
async function getToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await res.json();
  return data.access_token;
}

// ── 2. Load playlist
async function loadPlaylist() {
  try {
    token = await getToken();
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}?fields=tracks.items(track(name,artists,album(name,images),id))`,
      { headers: { Authorization: 'Bearer ' + token } }
    );
    const data = await res.json();
    tracks = data.tracks.items
      .filter(i => i.track && i.track.id)
      .map(i => ({
        id:     i.track.id,
        name:   i.track.name,
        artist: i.track.artists.map(a => a.name).join(', '),
        cover:  i.track.album.images[0]?.url || ''
      }));

    loadingMsg.style.display = 'none';
    buildCarousel();
    renderTracklist();
    loadTrack(0, false);
  } catch (e) {
    loadingMsg.textContent = 'could not load songs 🌸';
    console.error(e);
  }
}

// ── 3. Build carousel cards
function buildCarousel() {
  carousel.innerHTML = '';
  tracks.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'album-card';
    card.dataset.index = i;
    const img = document.createElement('img');
    img.src = t.cover;
    img.alt = t.name;
    img.loading = 'lazy';
    card.appendChild(img);
    card.addEventListener('click', () => {
      if (i === currentIndex) {
        togglePlay();
      } else {
        loadTrack(i, true);
      }
    });
    carousel.appendChild(card);
  });
  updateCarousel();
}

// ── 4. Update card positions
function updateCarousel() {
  const cards = carousel.querySelectorAll('.album-card');
  const n = tracks.length;
  cards.forEach(card => {
    const i = parseInt(card.dataset.index);
    const diff = ((i - currentIndex) % n + n) % n;
    const signed = diff > n / 2 ? diff - n : diff;

    let pos = 'hidden';
    if (signed === 0)  pos = 'center';
    else if (signed === -1) pos = 'left1';
    else if (signed === -2) pos = 'left2';
    else if (signed === 1)  pos = 'right1';
    else if (signed === 2)  pos = 'right2';

    card.dataset.pos = pos;
  });
}

// ── 5. Load track
function loadTrack(index, autoplay) {
  currentIndex = index;
  const t = tracks[index];
  if (!t) return;

  npTitle.textContent  = t.name;
  npArtist.textContent = t.artist;

  updateCarousel();
  highlightTracklist();

  // Update ambient color from album art
  extractAndApplyColor(t.cover);

  // Build spotify embed
  iframeReady = false;
  embedWrap.innerHTML = `
    <iframe
      id="spotifyIframe"
      src="https://open.spotify.com/embed/track/${t.id}?utm_source=generator&theme=0&autoplay=${autoplay ? 1 : 0}"
      width="300" height="80"
      frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  `;

  if (autoplay) {
    isPlaying = true;
  } else {
    isPlaying = false;
  }
  updatePlayUI();
}

// ── 6. Ambient color extraction via canvas
function extractAndApplyColor(imgUrl) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 10, 10);
    const data = ctx.getImageData(0, 0, 10, 10).data;
    let r = 0, g = 0, b = 0, count = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    // Derive 3 blob colors from the dominant hue
    const h = rgbToHsl(r, g, b)[0];
    const c1 = hslToRgb(h,        0.7, 0.45);
    const c2 = hslToRgb((h + 40) % 360, 0.6, 0.38);
    const c3 = hslToRgb((h + 200) % 360, 0.5, 0.42);

    blob1.style.background = `rgb(${c1.join(',')})`;
    blob2.style.background = `rgb(${c2.join(',')})`;
    blob3.style.background = `rgb(${c3.join(',')})`;
  };
  img.onerror = () => {
    // fallback to default colors
    blob1.style.background = '#c45c7a';
    blob2.style.background = '#7c5cbf';
    blob3.style.background = '#5c8fcf';
  };
  img.src = imgUrl;
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h /= 360;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hue2rgb(p, q, h + 1/3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1/3)].map(v => Math.round(v * 255));
}
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}

// ── 7. Play / Pause
function togglePlay() {
  isPlaying = !isPlaying;
  updatePlayUI();
  // Attempt to control iframe (works on Spotify embed via postMessage in some cases)
  // The autoplay param handles initial play; user play button is visual toggle
}

function updatePlayUI() {
  playIcon.innerHTML = isPlaying ? PAUSE_SVG : PLAY_SVG;
}

playBtn.addEventListener('click', togglePlay);

// ── 8. Navigation
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentIndex, true);
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex, true);
});
prevTrackBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentIndex, true);
});
nextTrackBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % tracks.length;
  loadTrack(currentIndex, true);
});

// ── 9. Tracklist
function renderTracklist() {
  tracklist.innerHTML = '';
  tracks.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'track-item';
    li.setAttribute('role', 'listitem');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `
      <span class="track-num">${i + 1}</span>
      <img class="track-cover" src="${t.cover}" alt="${t.name}" loading="lazy" />
      <div class="track-info">
        <div class="track-name">${t.name}</div>
        <div class="track-artist">${t.artist}</div>
      </div>
      <span class="track-play-icon">▶</span>
    `;
    li.addEventListener('click', () => loadTrack(i, true));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') loadTrack(i, true); });
    tracklist.appendChild(li);
  });
}

function highlightTracklist() {
  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('active', i === currentIndex);
  });
}

// ── 10. Tab switching
tabListen.addEventListener('click', () => {
  tabListen.classList.add('active');
  tabSongs.classList.remove('active');
  panelSongs.style.display = 'none';
});
tabSongs.addEventListener('click', () => {
  tabSongs.classList.add('active');
  tabListen.classList.remove('active');
  panelSongs.style.display = 'flex';
  panelSongs.style.flexDirection = 'column';
});

// ── 11. Init
loadPlaylist();
