const slidingWindow = document.querySelector('.sliding-window');
const pages = document.querySelectorAll('.pages');
const pageSelectors = document.querySelectorAll('.page-select');
let currentPage = 0;

function updateCarousel() {
  slidingWindow.classList.add('active');
  pages.forEach((page, index) => {
    page.style.transform = `translateX(-${currentPage * 100}%)`;
  });
  pageSelectors.forEach((selector, index) => {
    selector.classList.toggle('active', index === currentPage);
  });
}

pageSelectors.forEach((selector, index) => {
  selector.addEventListener('click', () => {
    currentPage = index;
    updateCarousel();
  });
});

setInterval(() => {
  currentPage = (currentPage + 1) % pages.length;
  updateCarousel();
}, 8000);