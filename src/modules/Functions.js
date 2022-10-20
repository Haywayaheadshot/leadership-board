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
    <p class="score-board-name">${newScoresInput.name}:</p>
    <p class="score-board-score">${newScoresInput.score}</p>
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
    .then((response) => response.json());
  nameInput.value = '';
  scoreInput.value = '';
  localStorage.getItem('scores');
};

const displayScores = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/').then((response) => response.json()).then((completeResponse) => {
    const createdApiScores = completeResponse.result;
    localStorage.setItem('scores', JSON.stringify(createdApiScores));
    const scores = new AddScores().getScores();
    scores.forEach((completeResponse) => {
      const newScoreLi = document.createElement('li');
      newScoreLi.className = 'score-board-li';
      scoreBoard.appendChild(newScoreLi);
      newScoreLi.innerHTML = `
              <p class="score-board-name">${completeResponse.user}:</p>
              <p class="score-board-score">${completeResponse.score}</p>
          `;
    });
  });
};

const refreshPage = () => {
  window.location.reload();
};

export { createScore, displayScores, refreshPage };
