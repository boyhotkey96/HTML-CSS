const listElm = document.querySelector('.film__list')
const nameInput = document.querySelector('.form .name')
const episodeInput = document.querySelector('.form .episode')
const btnSubmitElm = document.querySelector('.btn-submit')
const btnUpdateElm = btnSubmitElm.nextElementSibling
const API_FILM = 'http://localhost:3000/film'
let ID = ''
let arrFilm = []

function start() {
  getFilm(renderFilm)
}

start();

function getFilm(callback) {
  fetch(API_FILM)
    .then(response => response.json())
    .then(callback)
}

function renderFilm(film) {
  console.log(film)
  arrFilm = film
  // console.log(arrFilm)
  let htmls = arrFilm.map(item => {
    return `
            <li>
              <span style="display:inline-block;width:250px">
                <b>${item.name}</b> - ${item.episode} tập
              </span>
              <button class="btn-edit-${item.id}"
              onclick="editFilm('${encodeURIComponent(JSON.stringify(item))}')">Edit</button>
              <button onclick="deleteFilm('${item.id}')">Delete</button>
            </li>
          `
  })
  listElm.innerHTML = htmls.join('')
}

function resetForm() {
  nameInput.value = ''
  episodeInput.value = ''
}

function addFilm() {
  const nameInputValue = nameInput.value
  const episodeInputValue = episodeInput.value
  if (nameInputValue.trim().length == 0 || episodeInputValue.trim().length == 0) {
    return alert('You must enter value')
  }
  const data = {
    name: nameInputValue,
    episode: episodeInputValue
  }
  const option = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(API_FILM, option)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // getFilm(renderFilm)
      arrFilm.push({
        name: nameInputValue,
        episode: episodeInputValue
      })
      renderFilm(arrFilm)
      resetForm()
    })
    .catch(error => {
      alert(error)
      throw new error('Something went wrong!')
    })
}

function deleteFilm(id) {
  const option = {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json'
    }
  }
  fetch(`${API_FILM}/${id}`, option)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      getFilm(renderFilm)
      resetForm();
    })
}

function editFilm(item) {
  item = JSON.parse(decodeURIComponent(item))
  nameInput.value = item.name
  episodeInput.value = item.episode
  ID = item.id
  showBtnUpdate();
}

function updateFilm() {
  const data = {
    name: nameInput.value,
    episode: episodeInput.value
  }
  const option = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(`${API_FILM}/${ID}`, option)
    .then(response => response.json())
    .then(data => {
      getFilm(renderFilm)
    })
}

function showBtnUpdate() {
  btnSubmitElm.style.display = 'none'
  btnUpdateElm.style.display = 'block'
}

function hideBtnUpdate() {
  btnSubmitElm.style.display = 'block'
  btnUpdateElm.style.display = 'none'
}


btnSubmitElm.addEventListener('click', addFilm)
btnUpdateElm.addEventListener('click', updateFilm)
