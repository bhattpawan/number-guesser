// #00B74A

// Variable Definitions
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

const updateScores = (currentScore, maxScore) => {
  document.querySelector('#highest-score').textContent = maxScore;
  document.querySelector('#current-score').textContent = currentScore;
};

const updateMessage = (message) => {
  document.querySelector('.alert').textContent = message;
};

const clearMessage = () => {
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
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

const disableInput = () => {
  inputField.disabled = true;
};

const enableInput = () => {
  inputField.disabled = false;
};

const calcMaxScore = (currentScore, maxScore) => {
  let max = currentScore > maxScore ? currentScore : maxScore;
  return max;
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
      maxScore = calcMaxScore(currentScore, maxScore);
      updateScores(currentScore, maxScore);
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

// Event Listeners

inputField.addEventListener('input', checkNumber);
