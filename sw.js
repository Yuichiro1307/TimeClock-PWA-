self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("clock-cache").then(c =>
      c.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/timer.js",
        "/sound.js",
        "/notification.js"
      ])
    )
  );
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.openWindow("/"));
});
