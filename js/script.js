// ✿ thunderstorms — a playlist for someone special ✿
// "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night." — W. Shakespeare
 
// ════════════════════════════════════════
//  TRACKS
// ════════════════════════════════════════
const TRACKS = [
  { id:"5xw2cHVLw1rlDPp3cL9Zuv", name:"She's Thunderstorms",                       artist:"Arctic Monkeys",              cover:"https://i.scdn.co/image/ab67616d00004851cb44038b22f3d8a5e4e62d5a" },
  { id:"7LbUv7w2z7rEbNqp1uIL9U", name:"Fallingforyou",                              artist:"The 1975",                    cover:"https://i.scdn.co/image/ab67616d00004851592889d4d323785856f18770" },
  { id:"254bXAqt3zP6P50BdQvEsq", name:"Everywhere (2017 Remaster)",                 artist:"Fleetwood Mac",               cover:"https://i.scdn.co/image/ab67616d00004851aaba065944cd82a6f15c86b6" },
  { id:"3SWGtKHaCFEUqfm9ydUFVw", name:"Disaster",                                   artist:"Conan Gray",                  cover:"https://i.scdn.co/image/ab67616d0000485160a89b781c62ffe2136e4396" },
  { id:"45S5WTQEGOB1VHr1Q4FuPl", name:"Golden",                                     artist:"Harry Styles",                cover:"https://i.scdn.co/image/ab67616d000048519c72b249fcaa04d074c1dfcd" },
  { id:"4QlzkaRHtU8gAdwqjWmO8n", name:"Friday I'm In Love",                        artist:"The Cure",                    cover:"https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163" },
  { id:"5XeFesFbtLpXzIVDNQP22n", name:"I Wanna Be Yours",                           artist:"Arctic Monkeys",              cover:"https://i.scdn.co/image/ab67616d00004851bb54dde68cd23e2a268ae0f5" },
  { id:"0A1JLUlkZkp2EFrosoNQi0", name:"Labyrinth",                                  artist:"Taylor Swift",                cover:"https://i.scdn.co/image/ab67616d000048510b04da4f224b51ff86e0a481" },
  { id:"4e3ZNTAV6PCrdYMUrUlMpQ", name:"Electric Touch (feat. Fall Out Boy)",        artist:"Taylor Swift, Fall Out Boy",  cover:"https://i.scdn.co/image/ab67616d000048510b04da4f224b51ff86e0a481" },
  { id:"3MytWN8L7shNYzGl4tAKRp", name:"Sparks Fly (Taylor's Version)",              artist:"Taylor Swift",                cover:"https://i.scdn.co/image/ab67616d000048510b04da4f224b51ff86e0a481" },
  { id:"0gZGUAO42F1HmzZWHNPGAu", name:"Risk",                                       artist:"Gracie Abrams",               cover:"https://i.scdn.co/image/ab67616d000048516e2101520787791370f4a96b" },
  { id:"4zmKGsrXjLmljb5fTaBTot", name:"Snow On The Beach (feat. Lana Del Rey)",     artist:"Taylor Swift, Lana Del Rey",  cover:"https://i.scdn.co/image/ab67616d00004851fa747621a53c8e2cc436dee0" },
  { id:"5TTGoX70AFrTvuEtqHK37S", name:"No. 1 Party Anthem",                         artist:"Arctic Monkeys",              cover:"https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163" },
  { id:"5xA5MggKc3aQxuOzNzPUWB", name:"Apple Cider",                                artist:"beabadoobee",                 cover:"https://i.scdn.co/image/ab67616d00004851ceca3ef39ab8f9b59acff394" },
  { id:"3bnVBN67NBEzedqQuWrpP4", name:"Tear in My Heart",                           artist:"Twenty One Pilots",           cover:"https://i.scdn.co/image/ab67616d000048512df0d98a423025032d0db1f7" },
  { id:"70L6nHORQsblY813yNqUR3", name:"Cherry Waves",                                artist:"Deftones",                    cover:"https://i.scdn.co/image/ab67616d00004851c869fa3b4e0ce4dd9818a40e" },
  { id:"0pfpeTGQOWlGp6YUUbBD42", name:"Bewitched",                                  artist:"Laufey",                      cover:"https://i.scdn.co/image/ab67616d0000485174c732f8aa0e0ccbb3d17d96" },
  { id:"77sMIMlNaSURUAXq5coCxE", name:"Fearless (Taylor's Version)",                artist:"Taylor Swift",                cover:"https://i.scdn.co/image/ab67616d00004851a48964b5d9a3d6968ae3e0de" },
  { id:"55mQhobuwtY7lfLAXylg1k", name:"You Make Loving Fun (2004 Remaster)",        artist:"Fleetwood Mac",               cover:"https://i.scdn.co/image/ab67616d00004851e52a59a28efa4773dd2bfe1b" },
  { id:"7Mts0OfPorF4iwOomvfqn1", name:"So High School",                             artist:"Taylor Swift",                cover:"https://i.scdn.co/image/ab67616d000048518ecc33f195df6aa257c39eaa" },
  { id:"3yNJkriPzWjkkDAWHIAVUq", name:"Ours (Taylor's Version)",                    artist:"Taylor Swift",                cover:"https://i.scdn.co/image/ab67616d000048510b04da4f224b51ff86e0a481" },
  { id:"6jgkEbmQ2F2onEqsEhiliL", name:"My Kind of Woman",                           artist:"Mac DeMarco",                 cover:"https://i.scdn.co/image/ab67616d000048519d377496c6bc8724b521222d" },
  { id:"7I1kle4TNmkfednJDKo8GR", name:"If You Want To",                             artist:"beabadoobee",                 cover:"https://i.scdn.co/image/ab67616d00004851fe11583497b2a332995b88ed" },
  { id:"2eAvDnpXP5W0cVtiI0PUxV", name:"Dandelions",                                 artist:"Ruth B.",                     cover:"https://i.scdn.co/image/ab67616d00004851b09403f05bc0c306cf96990f" },
  { id:"4THoSHxiabL1rd59iVWu2T", name:"Cold Coffee",                                artist:"Ed Sheeran",                  cover:"https://i.scdn.co/image/ab67616d000048512fec3ad10ab2f3a637e7a127" }
];
 
// ════════════════════════════════════════
//  PÉTALOS DE LAVANDA + ABEJAS
// ════════════════════════════════════════
(function spawnPetals() {
  const container = document.getElementById('petalsBg');
 
  // Emoji de lavanda / flores lilas
  const lavandaEmojis = ['🌸', '💜', '🪻', '🌷'];
 
  // Crear 14 pétalos con posiciones y tiempos variados
  for (let i = 0; i < 14; i++) {
    const el = document.createElement('span');
    el.className = 'petal';
    const emoji = lavandaEmojis[Math.floor(Math.random() * lavandaEmojis.length)];
    el.textContent = emoji;
    const size = (12 + Math.random() * 14) + 'px';
    const x    = (Math.random() * 98) + '%';
    const dur  = (11 + Math.random() * 8) + 's';
    const delay = (Math.random() * 12) + 's';
    const sway = (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 25) + 'px';
    el.style.cssText =
      `--size:${size};--x:${x};--dur:${dur};--delay:${delay};--sway:${sway};` +
      `animation-delay:${delay};`;
    container.appendChild(el);
  }
 
  // Crear 4 abejas que aparecen de vez en cuando
  function spawnBee() {
    const bee = document.createElement('span');
    bee.className = 'bee';
    bee.textContent = '🐝';
    // Posición aleatoria en la pantalla
    const xPos  = (5 + Math.random() * 85) + '%';
    const yPos  = (10 + Math.random() * 60) + '%';
    const dur   = (9 + Math.random() * 7) + 's';
    bee.style.setProperty('--bee-x', xPos);
    bee.style.setProperty('--bee-y', yPos);
    bee.style.setProperty('--bee-dur', dur);
    bee.style.setProperty('--bee-delay', '0s');
    bee.style.animationDuration = dur;
    bee.style.animationDelay   = '0s';
    container.appendChild(bee);
    // Eliminar después de que termine la animación
    setTimeout(() => bee.remove(), parseFloat(dur) * 1000 + 300);
  }
 
  // Primera abeja después de 4 segundos, luego cada 18-35s
  setTimeout(function scheduleBee() {
    spawnBee();
    setTimeout(scheduleBee, 18000 + Math.random() * 17000);
  }, 4000);
})();
 
// ════════════════════════════════════════
//  PLAYER STATE
// ════════════════════════════════════════
let currentIndex = 0;
let isPlaying    = false;
 
const vinyl      = document.getElementById('vinyl');
const tonearm    = document.getElementById('tonearm');
const vinylCover = document.getElementById('vinylCover');
const albumBg    = document.getElementById('albumBg');
const npTitle    = document.getElementById('npTitle');
const npArtist   = document.getElementById('npArtist');
const tracklist  = document.getElementById('tracklist');
const embedWrap  = document.getElementById('spotifyEmbed');
 
// ════════════════════════════════════════
//  RENDER TRACKLIST
// ════════════════════════════════════════
function renderTracklist() {
  tracklist.innerHTML = '';
  TRACKS.forEach(function(t, i) {
    const li = document.createElement('li');
    li.className = 'track-item';
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'listitem');
    li.innerHTML =
      '<span class="track-num">' + (i + 1) + '</span>' +
      '<img class="track-cover" src="' + t.cover + '" alt="' + t.name + '" loading="lazy" referrerpolicy="no-referrer"/>' +
      '<div class="track-info">' +
        '<div class="track-name">' + t.name + '</div>' +
        '<div class="track-artist">' + t.artist + '</div>' +
      '</div>' +
      '<span class="track-play-icon">▶</span>';
 
    // Click desde la playlist → siempre autoplay
    li.addEventListener('click', function() {
      if (currentIndex === i && isPlaying) {
        pausePlayer();
      } else {
        loadTrack(i, true); // autoplay = true siempre al elegir canción
      }
    });
 
    li.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') li.click();
    });
 
    tracklist.appendChild(li);
  });
}
 
// ════════════════════════════════════════
//  LOAD TRACK
// ════════════════════════════════════════
function loadTrack(index, autoplay) {
  currentIndex = index;
  const t = TRACKS[index];
 
  // Actualizar portada y fondo
  vinylCover.src = t.cover;
  vinylCover.setAttribute('referrerpolicy', 'no-referrer');
  albumBg.style.backgroundImage = "url('" + t.cover + "')";
 
  // Actualizar info
  npTitle.textContent  = t.name;
  npArtist.textContent = t.artist;
 
  // Marcar activo en la lista
  document.querySelectorAll('.track-item').forEach(function(el, i) {
    el.classList.toggle('active', i === index);
  });
 
  // Embed de Spotify — autoplay=1 cuando corresponde
  const autoplayParam = autoplay ? '&autoplay=1' : '';
  embedWrap.innerHTML =
    '<iframe ' +
      'src="https://open.spotify.com/embed/track/' + t.id + '?utm_source=generator&theme=0' + autoplayParam + '" ' +
      'width="100%" height="80" frameborder="0" ' +
      'allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ' +
      'loading="lazy" style="border-radius:12px;display:block;">' +
    '</iframe>';
 
  if (autoplay) {
    playPlayer();
  } else {
    isPlaying = false;
    updateUI();
  }
}
 
// ════════════════════════════════════════
//  PLAY / PAUSE
// ════════════════════════════════════════
function playPlayer() {
  isPlaying = true;
  updateUI();
}
 
function pausePlayer() {
  isPlaying = false;
  updateUI();
}
 
function updateUI() {
  // Vinilo gira solo cuando está reproduciendo
  vinyl.classList.toggle('spinning', isPlaying);
  // Brazo se mueve sobre el vinilo cuando reproduce
  tonearm.classList.toggle('playing', isPlaying);
}
 
// ════════════════════════════════════════
//  INIT
// ════════════════════════════════════════
renderTracklist();
loadTrack(0, false); // Carga la primera canción sin autoplay