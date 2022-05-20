const backdropElement = document.getElementById('backdrop');
const addMovieModal = document.querySelector('header button');
const modalMovie = document.getElementById('add-modal');
const cancelButton = modalMovie.querySelector('.btn--passive');
const addButton = cancelButton.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteModal = document.getElementById('delete-modal');


const arrMovies = [];

const clearUserInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}

const toggleBackdrop = () => {
  backdropElement.classList.toggle('visible');
}

const showMovieModal = () => {
  modalMovie.classList.add('visible');
  toggleBackdrop();
}

const closeMovieModal = () => {
  modalMovie.classList.remove('visible');
}

const showDeleteModal = () => {
  deleteModal.classList.add('visible');
  toggleBackdrop();
}

const closeDeleteModal = () => {
  deleteModal.classList.remove('visible');
  toggleBackdrop();
}

const cacelAddMovieModal = () => {
  closeMovieModal();
  toggleBackdrop();
  clearUserInputs();
}

const backdropClick = () => {
  closeMovieModal();
  // backdropClick();
  closeDeleteModal();
}

const deleteMovie = (idUser) => {
  let numberIndex = 0;
  for (const movie of arrMovies) {
    if (movie.id === idUser) {
      break;
    }
    numberIndex++;
  }
  arrMovies.splice(numberIndex, 1);
  console.log(arrMovies);

  const movieListElement = document.getElementById('movie-list');
  // movieListElement.children[numberIndex].remove();
  // movieListElement.children[numberIndex].parentNode.removeChild(movieListElement.children[numberIndex]);
  movieListElement.removeChild(movieListElement.children[numberIndex]);
  closeDeleteModal();
  updateUI();
}

const deleteMovieHanle = (id) => {
  // showDeleteModal();
  deleteModal.classList.add('visible');
  toggleBackdrop();

  const cancelDeleteButton = deleteModal.querySelector('.btn--passive');
  let confirmDeleteButton = cancelDeleteButton.nextElementSibling;


  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));

  confirmDeleteButton = cancelDeleteButton.nextElementSibling;
  // confirmDeleteButton.removeEventListener('click', deleteMovie.bind(null, id));
  cancelDeleteButton.removeEventListener('click', closeDeleteModal);

  cancelDeleteButton.addEventListener('click', closeDeleteModal);
  confirmDeleteButton.addEventListener('click', deleteMovie.bind(null, id));
  // cancelDeleteButton.onclick = closeDeleteModal;
  // confirmDeleteButton.onclick = () => deleteMovie(id);
  // https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16013548#questions/12555624
}

const updateUI = () => {
  if (arrMovies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
}

const renderNewMovies = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">  
      <img src="${imageUrl}" title="${title}" />
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</h2>
    </div>
  `
  const movieListElement = document.getElementById('movie-list');
  movieListElement.append(newMovieElement);

  newMovieElement.addEventListener('click', deleteMovieHanle.bind(null, id));
}

const addMovies = () => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (!titleValue.trim() || !imageValue.trim() || !ratingValue.trim() || +ratingValue < 1 || +ratingValue > 5) {
    alert('You entered wrong: title, url or rating invalid!')
  } else {
    /* const objItem = {}
    objItem.title = titleValue;
    objItem.imageUrl = imageValue;
    objItem.rating = ratingValue; */
    const objItem = {
      id: Math.random().toString(),
      title: titleValue,
      imageUrl: imageValue,
      rating: ratingValue
    }
    arrMovies.push(objItem);
    console.log(arrMovies);
    closeMovieModal();
    toggleBackdrop();
    clearUserInputs();
    renderNewMovies(objItem.id, objItem.title, objItem.imageUrl, objItem.rating);
    updateUI();
  }
}



addMovieModal.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', backdropClick);
cancelButton.addEventListener('click', cacelAddMovieModal);
addButton.addEventListener('click', addMovies);