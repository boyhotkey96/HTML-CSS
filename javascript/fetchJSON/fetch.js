const showJson = document.getElementById('showJson');

const postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi) 
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);
    let total = '';
    posts.forEach(function(item, index) {
      if (index <= 50) {
        return total += `<div>
                        <h1>${item.id}</h1>
                        <h1>${item.title}</h1>
                        <p>${item.body}</p>
                        </div>
                        `
      }
    });
    return showJson.innerHTML = total;

    /* let htmls = posts.map((item) => {
      return `<div>
                <h1>${item.id}</h1>
                <h1>${item.title}</h1>
                <p>${item.body}</p>
              </div>
            `
    });
    return showJson.innerHTML = htmls; */
  })
  .catch((error) => alert('Có lỗi!'));
