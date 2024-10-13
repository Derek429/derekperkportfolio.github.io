//Nav

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

navSlide();

//Home - Carousel Images

const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach(image => {
    image.classList.remove('active');
  });
  carouselImages[index].classList.add('active');
}

function rotateCarousel() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Set the initial image as active
showImage(currentIndex);

// Delay the rotation of the carousel by 1 minute (60000 milliseconds)
setTimeout(function() {
  setInterval(rotateCarousel, 60000);
}, 1000);

// Donate btn

// Select all elements with the class "donate"
const donateBtns = document.querySelectorAll('.donate-bttn');

// Loop through each donate button and add the pulsing animation effect
donateBtns.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.classList.add('pulse');
  });
  button.addEventListener('mouseout', function() {
    this.classList.remove('pulse');
  });
});
