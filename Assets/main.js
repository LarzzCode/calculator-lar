
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});


  // slider
let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll("img");
  let images = document.querySelector("ul");

  if (imageCount.length === 2) {
    imageCount = document.querySelectorAll("img");
    images.style.transform = `translateX(0px)`;
    return
  }

  images.style.transform = `translateX(-${currentSlide * 550}px)`;
  if (currentSlide === imageCount.length - 0) {
    currentSlide = 0;
    images.style.transform = `translateX(${currentSlide * 550}px)`;
  } else {
      currentSlide++;
    }

}

setInterval(() => {
  startSlider();
}, 1500);