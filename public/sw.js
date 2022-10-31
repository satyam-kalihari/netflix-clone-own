



const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html', 'no-internet-connection.png'];

const self = this;

//limiting cache size
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(key => {
            if(key.length > size) {
                cache.delete(key[0]).then(limitCacheSize(name, size))
            }
        })
    })
}

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

