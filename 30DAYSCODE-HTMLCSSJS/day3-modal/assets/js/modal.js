const btnModal = document.querySelector('.btn-modal');
const iconCloseModal = document.querySelector('.modal-header i');
const closeModal = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');



const toggleModal = () => {
  modal.classList.toggle('is-open');
}



btnModal.addEventListener('click', toggleModal);
iconCloseModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
modal.addEventListener('click', (e) => {
  // console.log(e.currentTarget)
  if (e.target === e.currentTarget) {
    // console.log(e.currentTarget)
    toggleModal();
  }
});
/* modalContent.addEventListener('click', (e) => {
 e.stopPropagation()
}) */
