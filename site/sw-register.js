navigator.serviceWorker
  .register('/service-worker.js') // Ensure this matches the path
  .then((registration) => {
    console.log('Service Worker registered:', registration.scope);
  })
  .catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
