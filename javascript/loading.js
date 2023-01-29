window.addEventListener("load", () => {
    const loader = document.querySelector("#preloader__container");
  
    setTimeout(() => {
        loader.classList.add("loader--hidden");
    }, 2000);
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });