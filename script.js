'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //There is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');
  }

  //Player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number ').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //Player looses
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
