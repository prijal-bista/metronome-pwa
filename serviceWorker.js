const metronomeCache = 'metronome-cache-v1.0';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/metronome.js',
  '/script.js',
  '/metronome.png',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(metronomeCache).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (fetchEvent) => {
  // network first approach
  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(function () {
      return caches.match(fetchEvent.request);
    })
  );

  // cache first approach
  // fetchEvent.respondWith(
  //   caches.match(fetchEvent.request).then((res) => {
  //     return res || fetch(fetchEvent.request);
  //   })
  // );
});
