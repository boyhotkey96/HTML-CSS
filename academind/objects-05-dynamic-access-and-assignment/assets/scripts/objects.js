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

  if (filterResult.length === 0) {
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Dữ liệu bạn tìm kiếm hiện không tồn tại!';
    movieUl.append(h1Element);
    return;
  }

  filterResult.forEach(item => {
    // if (!(item === undefined)) {
    //   // running
    // }
    const { info, ...otherPops } = item;
    // console.log(otherPops);
    // const { title: movieTitle } = info;
    const movieLi = document.createElement('li');
    let { getFormatTitle } = item;

    /* getFormatTitle = getFormatTitle.bind(item);
    let text = getFormatTitle() + ' - '; */
    /* getFormatTitle = getFormatTitle.call(item);
    let text = getFormatTitle + ' - '; */

    getFormatTitle = getFormatTitle.apply(item);
    let text = getFormatTitle + ' - ';
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

  const obj = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormatTitle() {
      return this.info.title.toUpperCase();
    }
  };
  movieList.push(obj);
  console.log(movieList);
  renderMovie();

};

const searchMovieHandler = function() {
  console.log(this);
  const filterValue = document.getElementById('filter-title').value;
  renderMovie(filterValue);
}



btnAddMovie.addEventListener('click', addMovieHandler.bind(null, this));
btnSearchMovie.addEventListener('click', searchMovieHandler);