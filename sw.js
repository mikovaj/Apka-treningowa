// Offline cache dla aplikacji "Moja masa".
// Po zmianie plików aplikacji podbij numer wersji, żeby iPhone pobrał nową wersję.
const CACHE = 'moja-masa-v7';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'fonts/barlow-condensed-600-latin.woff2', 'fonts/barlow-condensed-600-latin-ext.woff2', 'fonts/barlow-condensed-800-latin.woff2', 'fonts/barlow-condensed-800-latin-ext.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Sieć najpierw (żeby łapać aktualizacje), a bez internetu — kopia z pamięci.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
