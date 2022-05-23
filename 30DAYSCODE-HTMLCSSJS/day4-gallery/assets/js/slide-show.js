const images = document.querySelectorAll('.gallery-image img');
const gallerySlide = document.querySelector('.gallery-slide');
const imageInner = document.querySelector('.gallery-slide__inner img');
const iconClose = document.querySelector('.gallery-slide__close');
const iconPrev = document.querySelector('.gallery-slide__prev');
const iconNext = document.querySelector('.gallery-slide__next');
let curIndex = 0;



const showSlide = () => {
  curIndex === 0 ? iconPrev.style.display = 'none' : iconPrev.style.display = 'block';
  curIndex === images.length - 1 ? iconNext.style.display = 'none' : iconNext.style.display = 'block';
  imageInner.src = images[curIndex].src;
}

images.forEach((item, index) => {
  item.addEventListener('click', () => {
    gallerySlide.classList.add('is-open');
    curIndex = index;
    showSlide();
  })
});

iconClose.addEventListener('click', () => {
  gallerySlide.classList.remove('is-open');
})

iconPrev.addEventListener('click', () => {
  if (curIndex > 0) {
    curIndex--;
    showSlide();
  }
})

iconNext.addEventListener('click', () => {
  if (curIndex < images.length - 1) {
    curIndex++;
    showSlide();
  }
})

document.addEventListener('keyup', (e) => {
  if (e.which === 27) {
    gallerySlide.classList.remove('is-open');
  }
})