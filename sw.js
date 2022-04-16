const cacheName = 'cache-sw'
const resourcesToPrecache = ['', 'index.html', 'styles.css']

self.addEventListener('install', (event) => {
    self.skipWaiting()
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => {
                console.log('Precaching initial files')
                return cache.addAll(resourcesToPrecache)
            })
            .catch((error) => {
                console.log('Error in installation', error)
            })
    )
})

self.addEventListener('fetch', (event) => {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.open(cacheName).then((cache) => {
                return cache.match(event.request).then((response) => {
                    console.log('Response: ', response)
                    return (
                        response ||
                        fetch(event.request).then((response) => {
                            cache.put(event.request, response.clone())
                            return response
                        })
                    )
                })
            })
        )
    }
})
