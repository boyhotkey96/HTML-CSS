const postApi = 'http://localhost:3000/post';

fetch(postApi)
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })