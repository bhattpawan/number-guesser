// #00B74A

let secretNumber = Math.trunc(Math.random() * 10) + 1;
const inputField = document.querySelector('#guess');
const resetBtn = document.querySelector('.reset-btn');

const getCurrentScore = () => {
  const score = document.querySelector('#current-score').textContent;
  return score;
};

const getMaxScore = () => {
  const maxScore = document.querySelector('#highest-score').textContent;
  return maxScore;
};

const getTotalMaxScore = (currentScore) => {
  let totalMax = parseInt(getMaxScore());
  totalMax += parseInt(currentScore);
  return totalMax;
};

const updateScores = (currentScore, maxScore) => {
  document.querySelector('#highest-score').textContent = maxScore;
  document.querySelector('#current-score').textContent = currentScore;
};

const updateMessage = (message) => {
  document.querySelector('.alert').textContent = message;
};

const clearMessage = (message) => {
  document.querySelector('.alert').textContent = '';
};

const clearInputField = () => {
  inputField.value = '';
};

const resetScores = () => {
  document.querySelector('#current-score').textContent = 10;
};

const reset = () => {
  clearInputField();
  resetScores();
  enableInput();
  clearMessage();
};

const disableInput = () => {
  inputField.disabled = true;
};

const enableInput = () => {
  inputField.disabled = false;
};

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  reset();
});

const checkNumber = (e) => {
  const guessedNumber = parseInt(e.target.value);
  let currentScore = getCurrentScore();
  let maxScore = getMaxScore();
  if (guessedNumber && guessedNumber > 0 && guessedNumber <= 10) {
    if (guessedNumber === secretNumber) {
      updateMessage('Thats Correct ✔');
      disableInput();
      let max = currentScore > maxScore ? currentScore : maxScore;
      max = getTotalMaxScore(max);
      updateScores(currentScore, max);
    } else {
      if (currentScore > 1) {
        currentScore--;
        updateMessage('Incorrect Guess ❌');
        updateScores(currentScore, maxScore);
      } else {
        updateMessage(`Attempts Expired. The correct answer is ${secretNumber}`);
        disableInput();
      }
    }
  }
};

inputField.addEventListener('input', checkNumber);
