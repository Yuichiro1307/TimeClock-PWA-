function showNotification(title, body) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
    return;
  }

  navigator.serviceWorker.getRegistration().then(reg => {
    if (reg) {
      reg.showNotification(title, {
        body,
        requireInteraction: true
      });
    }
  });
}
