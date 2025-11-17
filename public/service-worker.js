const CACHE_NAME = "interactive-video-cache-v4";

// Install event
self.addEventListener("install", (event) => {
  console.log("[SW] Installed");
  self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
  console.log("[SW] Activated");
  event.waitUntil(self.clients.claim());
});

// Fetch & cache GET requests
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Cache only GET
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("[SW] Loaded from cache:", req.url);
        return cachedResponse;
      }

      return fetch(req)
        .then((networkResponse) => {
          // Skip opaque responses (Cloudinary video may be opaque, skip)
          if (!networkResponse || networkResponse.type !== "basic") {
            return networkResponse;
          }

          const cloned = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, cloned);
          });

          return networkResponse;
        })
        .catch((error) => {
          console.log("[SW] Fetch failed:", error);
        });
    })
  );
});
