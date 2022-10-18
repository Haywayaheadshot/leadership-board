import AddScores from './Constructor.js';

const scoreBoard = document.querySelector('.score-board-ul');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const createScore = () => {
  const name = nameInput.value;
  const score = scoreInput.value;
  const newScoresInput = new AddScores(name, score);
  newScoresInput.addScore();
  const newScoreLi = document.createElement('li');
  newScoreLi.className = 'score-board-li';
  scoreBoard.appendChild(newScoreLi);
  newScoreLi.innerHTML = `
    <p class="score-board-name">${newScoresInput.name}:</p>
    <p class="score-board-score">${newScoresInput.score}</p>
    `;
  nameInput.value = '';
  scoreInput.value = '';
  localStorage.getItem('scores');
};

const displayScores = () => {
  const scores = new AddScores().getScores();
  scores.forEach((score) => {
    const newScoreLi = document.createElement('li');
    newScoreLi.className = 'score-board-li';
    scoreBoard.appendChild(newScoreLi);
    newScoreLi.innerHTML = `
            <p class="score-board-name">${score.name}:</p>
            <p class="score-board-score">${score.score}</p>
        `;
  });
};

const refreshPage = () => {
  window.location.reload();
};

export { createScore, displayScores, refreshPage };
