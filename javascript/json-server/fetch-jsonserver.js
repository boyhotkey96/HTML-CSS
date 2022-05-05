const postApi = 'http://localhost:3000/profile';

fetch(postApi)
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })