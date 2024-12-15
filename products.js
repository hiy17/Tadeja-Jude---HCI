const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;  // Start at the first slide
const slides = document.querySelectorAll('.carousel-card');
const slideWidth = slides[0].offsetWidth + 20; // Adjust for margin/padding if needed
const totalSlides = slides.length;
const maxSlides = 5; // Stop after the fourth card

// Update the carousel position
const updateCarouselPosition = () => {
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
};

// Show next slide
nextBtn.addEventListener('click', () => {
  if (currentSlide < maxSlides - 1) { // Stop at fourth slide (index 3)
    currentSlide++;
    updateCarouselPosition();
  }
  // If on the fourth slide, stop scrolling further.
});

// Show previous slide
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarouselPosition();
  }
  // If on the first slide, stop scrolling further.
});

// Adjust the position when resizing the window to maintain correct behavior
window.addEventListener('resize', () => {
  const slideWidth = slides[0].offsetWidth + 20; // Recalculate slide width on resize
  updateCarouselPosition();
});
