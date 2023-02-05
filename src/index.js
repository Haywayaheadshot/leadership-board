import './style.css';

import { createScore, displayScores, refreshPage } from './modules/Functions.js';

const submitScore = document.querySelector('#submit-score-id');
const refreshButton = document.querySelector('.refresh-button');
const errorMessage = document.querySelector('.error-message');
const lengthErrorMessage = document.querySelector('.length-error-message');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const checkInput = (event) => {
  if (nameInput.value === '' || scoreInput.value === '') {
    event.preventDefault();
    errorMessage.style.display = 'block';
    lengthErrorMessage.style.display = 'none';
    return;
  } 
  if (nameInput.value.length > 10 || scoreInput.value.length > 10) {
    event.preventDefault();
    errorMessage.style.display = 'none';
    lengthErrorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    lengthErrorMessage.style.display = 'none';
    createScore();
  }
};

submitScore.addEventListener('click', (event) => {
  checkInput(event);
});

document.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 || event.which === 13) {
    checkInput(event);
  }
});

window.onload = () => {
  displayScores();
};

refreshButton.addEventListener('click', (event) => {
  event.preventDefault();
  refreshPage();
});