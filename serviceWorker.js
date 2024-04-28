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
    fetch(fetchEvent.request)
      .then((res) => {
        return caches.open(metronomeCache).then(function (cache) {
          cache.put(fetchEvent.request.url, res.clone());
          return res;
        });
      })
      .catch(function () {
        return caches.match(fetchEvent.request);
      })
  );
});
