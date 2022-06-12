const listElement = document.querySelector('.posts');
const postElement = document.getElementById('single-post');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function () {
  // const data = JSON.parse(xhr.response)
  const listPost = xhr.response;
  for (const post of listPost) {
    const postEl = document.importNode(postElement.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

xhr.send();