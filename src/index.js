import './style.css';

import { createScore, displayScores, refreshPage } from './modules/Functions.js';

const submitScore = document.querySelector('.submit-score');
const refreshButton = document.querySelector('.refresh-button');
const errorMessage = document.querySelector('.error-message');

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  if (document.getElementById('name').value === '' || document.getElementById('score').value === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    createScore();
  }
});

document.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 || event.which === 13) {
    event.preventDefault();
    if (document.getElementById('name').value === '' || document.getElementById('score').value === '') {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      createScore();
    }
  }
});

window.onload = () => {
  displayScores();
};

refreshButton.addEventListener('click', (event) => {
  event.preventDefault();
  refreshPage();
});