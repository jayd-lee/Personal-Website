const vertical = document.querySelectorAll('.hero-02, .hero-03, .hero-04, .hero-05');

window.addEventListener('scroll', () => {
  vertical.forEach(image => {
      let speed = image.dataset.speed || 2;
      image.style.transform = `translateY(${window.pageYOffset * speed}px)`;
  });
});

const left = document.querySelectorAll('.hero-10, .hero-09, .hero-08, .hero-07');

window.addEventListener('scroll', () => {
  left.forEach(image => {
      let speed = image.dataset.speed || 2;
      image.style.transform = `translateX(${window.pageYOffset * speed}px)`;
  });
});


const cloud = document.querySelectorAll(' .hero-cloud8, .hero-cloud7, .hero-cloud6, .hero-cloud5, .hero-cloud4, .hero-cloud3, .hero-cloud2, .hero-cloud1');
let initialPosition = 0;
let endWidth = document.documentElement.clientWidth * 0.17;
let direction = 1;


function updatePosition() {
    for (let i = 0; i < cloud.length; i++) {
      let image = cloud[i];
      let speed = image.dataset.speed || 2;
      initialPosition += speed * direction;
      if (initialPosition >= endWidth) {
        direction = -1;
      } else if (initialPosition <= -300) {
        direction = 1;
      }
      if (image.classList.contains("hero-cloud6") || image.classList.contains("hero-cloud5") || image.classList.contains("hero-cloud1")) {
        image.style.transform = `translateY(-8.5%) translateX(${initialPosition}px)`;
      } else {
        image.style.transform = `translateX(${initialPosition}px)`;
      }
    }
  }
setInterval(updatePosition, 20);

