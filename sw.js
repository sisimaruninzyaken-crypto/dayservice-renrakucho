const CACHE_NAME = 'dayservice-v1';
const URLS = ['/dayservice-renrakucho/', '/dayservice-renrakucho/index.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(URLS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));