// #00B74A

const secretNumber = Math.trunc(Math.random() * 10) + 1;
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

const clearInputField = () => {
  inputField.value = '';
};

const resetScores = () => {
  document.querySelector('#current-score').textContent = 10;
  document.querySelector('#highest-score').textContent = getMaxScore();
};

const reset = () => {
  clearInputField();
  resetScores();
  enableInput();
};

const disableInput = () => {
  inputField.disabled = true;
};

const enableInput = () => {
  inputField.disabled = false;
};

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  resetScores();
});

const checkNumber = (e) => {
  const guessedNumber = parseInt(e.target.value);
  let currentScore = getCurrentScore();
  let maxScore = getMaxScore();
  if (guessedNumber && guessedNumber > 0 && guessedNumber <= 10) {
    if (guessedNumber == secretNumber) {
      updateMessage('Thats Correct ✔');
      disableInput();
      let max = currentScore > maxScore ? currentScore : maxScore;
      updateScores(currentScore, max);
    } else {
      if (currentScore > 0) {
        currentScore--;
        updateMessage('Incorrect Guess ❌');
        updateScores(currentScore, maxScore);
      } else {
        disableInput();
      }
    }
  }
};

inputField.addEventListener('input', checkNumber);
