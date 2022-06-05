let btnSubmit = document.querySelector('.search__submit')


btnSubmit.addEventListener('click', function () {
  this.parentNode.classList.toggle('active')
  this.previousElementSibling.focus();
})