 // Modal
 var btnsTicket = document.querySelectorAll('.js-btn-ticket')
 var modal = document.querySelector('.modal')
 var modalClose = document.querySelector('.modal-close')
 var btnClose = document.querySelector('.btn-close')
 var modalContainer = document.querySelector('.js-modal-container')

 function showModal() {
     modal.classList.add('open')
 }

 function hideModal() {
     modal.classList.remove('open')
 }

 for (var btnTicket of btnsTicket) {
     btnTicket.addEventListener('click', showModal)
 }

 modalContainer.addEventListener('click', function (event) {
     event.stopPropagation()
 })

 modalClose.addEventListener('click', hideModal)
 btnClose.addEventListener('click', hideModal)
 modal.addEventListener('click', hideModal)
