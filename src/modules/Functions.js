import AddScores from './Constructor.js';

const scoreBoard = document.querySelector('.score-board-ul');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const createScore = async () => {
  const name = nameInput.value;
  const score = scoreInput.value;
  const newScoresInput = new AddScores(name, score);
  newScoresInput.addScore();
  const newScoreLi = document.createElement('li');
  newScoreLi.className = 'score-board-li';
  scoreBoard.appendChild(newScoreLi);
  newScoreLi.innerHTML = `
    <p class="score-board-name font">${newScoresInput.name}:</p>
    <p class="score-board-score font">${newScoresInput.score}</p>
    `;
  // post new name and score to fetch API?
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // make sure to serialize your JSON body
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      const createdSuccessfully = document.getElementById('success-message');
      createdSuccessfully.style.display = 'block';
      setTimeout(() => {
        createdSuccessfully.style.display = 'none';
      }, 1500);
    });
  nameInput.value = '';
  scoreInput.value = '';
  localStorage.getItem('scores');
};

const displayScores = async () => {
  const spinner = document.getElementById('spinner');
  spinner.classList.replace('spinner-section', 'spinner-section-view');
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/').then((response) => response.json()).then((completeResponse) => {
    const createdApiScores = completeResponse.result;
    localStorage.setItem('scores', JSON.stringify(createdApiScores));
    const scores = new AddScores().getScores();
    spinner.classList.replace('spinner-section-view', 'spinner-section');
    scores.forEach((completeResponse) => {
      const newScoreLi = document.createElement('li');
      newScoreLi.className = 'score-board-li';
      scoreBoard.appendChild(newScoreLi);
      newScoreLi.innerHTML = `
              <p class="score-board-name font">${completeResponse.user}:</p>
              <p class="score-board-score font">${completeResponse.score}</p>
          `;
    });
  });
};

const refreshPage = () => {
  window.location.reload();
};

export { createScore, displayScores, refreshPage };
