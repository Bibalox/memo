const CACHE_NAME = 'memo-v1'

const APP_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  )

  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key)
            }
          })
        )
      ),
    ])
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  // Ignore non-GET requests
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // Ignore Supabase requests
  if (url.hostname.includes('supabase')) {
    return
  }

  // App navigation
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    )
    return
  }

  // Cache first
  event.respondWith(
    caches.match(request).then(async (cached) => {
      if (cached) return cached

      const response = await fetch(request)

      const cache = await caches.open(CACHE_NAME)
      cache.put(request, response.clone())

      return response
    })
  )
})
