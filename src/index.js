if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    //A Promise that resolves with a ServiceWorkerRegistration object.
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}
