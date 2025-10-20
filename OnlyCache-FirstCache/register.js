if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: './' })
    .then(() => console.log('SW registrado correctamente'))
    .catch(err => console.error('Error al registrar el SW:', err));
}