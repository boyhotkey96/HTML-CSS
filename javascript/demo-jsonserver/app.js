const wrapperElm = document.getElementById('wrapper')
const divElm = document.createElement('div')
wrapperElm.append(divElm)

const apiCourse = "http://localhost:3000/course"

fetch(apiCourse)
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(course => {
    console.log(course)
    let htmls = course.map((item) => {
      return `
              <div>ID: ${item.id}</div>
              <h3>Name: ${item.name}</h3>
              <p>Description: ${item.description}</p>
            `
    })
    return divElm.innerHTML = htmls
  })