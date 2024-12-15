const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;  
const slides = document.querySelectorAll('.carousel-card');
const slideWidth = slides[0].offsetWidth + 20; 
const totalSlides = slides.length;
const maxSlides = 5; 

const updateCarouselPosition = () => {
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
};

nextBtn.addEventListener('click', () => {
  if (currentSlide < maxSlides - 1) { 
    currentSlide++;
    updateCarouselPosition();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarouselPosition();
  }
});

window.addEventListener('resize', () => {
  const slideWidth = slides[0].offsetWidth + 20; 
  updateCarouselPosition();
});
