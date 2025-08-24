// Service Worker for Performance Optimization
const CACHE_NAME = 'brainout-news-v1'
const STATIC_ASSETS = [
  '/',
  '/news',
  '/guides',
  '/reviews',
  '/manifest.json'
]

// Cache static assets during install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        self.skipWaiting()
      })
  )
})

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone response for caching
            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Cache images and static assets
                if (event.request.url.includes('/images/') || 
                    event.request.url.includes('.css') || 
                    event.request.url.includes('.js')) {
                  cache.put(event.request, responseToCache)
                }
              })

            return response
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/')
            }
          })
      })
  )
})