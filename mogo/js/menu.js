const menuToggle = document.querySelector('.menu__bar');
var menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.add('is-open');
})

window.addEventListener('click', function(e) {
  if (!menu.contains(e.target)){
    menu.classList.remove('is-open');
  }
})