export {};

function loadCOIServiceWorker() {
  console.log('Load COIServiceWorker', navigator);
  if (
    typeof window !== 'undefined'
    &&
    'serviceWorker' in navigator
    // &&
    // window.location.hostname != 'localhost'
  ) {
    navigator.serviceWorker.register('/angular-o1js/coi-serviceworker.min.js')
      .then(function(registration) {
        console.log('COI Service Worker registered with scope:', registration.scope);
      })
      .catch(function(error) {
        console.error('COI Service Worker registration failed:', error);
      });
  }
}

loadCOIServiceWorker();
