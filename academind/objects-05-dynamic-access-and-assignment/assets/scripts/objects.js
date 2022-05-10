const btnAddMovie = document.getElementById('add-movie-btn');
const movieUl = document.getElementById('movie-list');
const btnSearchMovie = document.getElementById('search-btn');

const movieList = [];



const renderMovie = (filter = '') => {
  if (movieList.length === 0) {
    movieUl.classList.remove('visible');
    return;
  } else {
    movieUl.classList.add('visible');
  }
  movieUl.innerHTML = '';
  
  const filterResult = !filter ? movieList : movieList.filter(item => item.info.title.toLowerCase().includes(filter.toLowerCase()));
  
  filterResult.forEach(item => {
    const { info, ...otherPops } = item;
    // console.log(otherPops);
    const movieLi = document.createElement('li');
    const { title: movieTitle } = info;
    let text = movieTitle + ' - ';
    for (const key in info) {
      if (key !== 'title') {
        text += `${key}: ${info[key]}`;
      }
    }
    movieLi.textContent = text;
    movieUl.append(movieLi);
  });
};


const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return alert('You must enter value!');
  }
  let obj = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString()
  }
  movieList.push(obj);
  console.log(movieList);
  renderMovie();
 
};

const searchMovieHandler = () => {
  const filterValue = document.getElementById('filter-title').value;
  renderMovie(filterValue);
}



btnAddMovie.addEventListener('click', addMovieHandler);
btnSearchMovie.addEventListener('click', searchMovieHandler);