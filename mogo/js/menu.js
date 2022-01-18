const menuToggle = document.querySelector('.menu__bar');
var menu = document.querySelector('.menu');
var menuItem = document.querySelector('.menu__link');

function hideScroll() {
  document.body.style.overflowY = 'hidden';
}

function showScroll() {
  document.body.style.overflowY = 'auto';
}
menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.add('is-open');
  hideScroll();
})

// window.addEventListener('click', function(e) {
//   if (!menu.contains(e.target)){
//     menu.classList.remove('is-open');
//   }
// })

window.addEventListener('click', function(e) {
  if (e.target != menu && e.target.parentNode != menu) {
      this.setTimeout(() => {
      menu.classList.remove('is-open');
      showScroll();
    }, 250);
  }
})