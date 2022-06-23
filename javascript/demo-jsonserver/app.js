const listElement = document.querySelector('.course-list')
let nameInput = document.querySelector('input[name="name"]')
let descriptionInput = document.querySelector('input[name="description"]')
const btnSubmit = document.querySelector('.btnSubmit')
const btnUpdate = document.querySelector('.btnUpdate')
let ID = 0;

const apiCourse = "http://localhost:3000/course"

const start = () => {
  getCourse(renderCourse)
}

start();

function renderCourse(course) {
  let htmls = course.map(item => {
    console.log(item)
    return `
            <li class="course-item-${item.id}">
              <h3>Name: ${item.name}</h3>
              <p>Description: ${item.description}</p>
              <button onclick="handleDeleteCourse('${item.id}')">Delete</button>
              <button onclick="handleEditCourse('${item.id}', '${item.name}', '${item.description}')">Edit</button>
            </li>
          `
  })
  listElement.innerHTML = htmls.join('')
}

function getCourse(callback) {
  fetch(apiCourse)
    .then(response => response.json())
    .then(callback)
}

function createCourse(data, callback) {
  const method = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(apiCourse, method)
    .then(response => response.json())
    .then(callback)
}

function handleDeleteCourse(id) {
  const method = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  }
  fetch(`${apiCourse}/${id}`, method)
    .then(response => response.json())
    .then(() => {
      const itemElement = document.querySelector(`.course-item-${id}`)
      itemElement.remove()
    })
}

function handleEditCourse(id, name, description) {
  ID = id,
  nameInput.value = name
  descriptionInput.value = description
  showEdit();
}

function updateCourse() {
  const formData = {
    name: nameInput.value,
    description: descriptionInput.value
  }
  const method = {
    method: "PUT",
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(formData)
  }
  fetch(`${apiCourse}/${ID}`, method)
    .then(response => response.json())
    .then(data => {
     getCourse(renderCourse)
    })
    .catch(error => console.log(error))
  hideEdit();
}

const showEdit = () => {
  btnSubmit.style.display = 'none'
  btnUpdate.style.display = 'block'
}

const hideEdit = () => {
  btnSubmit.style.display = 'block'
  btnUpdate.style.display = 'none'
}

btnSubmit.addEventListener('click', () => {
  const name = nameInput.value
  const description = descriptionInput.value
  const formData = {
    name: name,
    description: description
  }
  createCourse(formData, () => {
    getCourse(renderCourse)
  });
})

btnUpdate.addEventListener('click', updateCourse)