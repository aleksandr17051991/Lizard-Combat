const circle = document.querySelector('#circle');
const score = document.querySelector('#score');

// Creat logic for start and restart web page. Boots all score from localStorage

function startApp() {
  setScore(getScore());
  setNewLevel();
  setImage();
  setRequiredNmb();
}

function setScore(scoreValue) {
  localStorage.setItem('score', scoreValue);
  score.textContent = scoreValue;
}

function getScore() {
  return Number(localStorage.getItem('score')) || 0;
}

//addOneVal() - implement +1 to amount of echievement

function addOneVal() {
  setScore(getScore() + 1);
  setNewLevel();
  setRequiredNmb();
  setImage();
}

// set new PICTURE when your score above 50

function setImage() {
  if (getScore() >= 50) {
    circle.setAttribute('src', './assets/lizzard.png');
  }
}

// calculate required coins in first level
function setRequiredNmb() {
  const requiredNmbField = document.querySelector('#required-number');
  const restOfCoins = 50 - getScore();

  if (restOfCoins > 0) {
    requiredNmbField.textContent = restOfCoins;
  }
}

// change game-title and required-coins box when user reaches 50 coins

function setNewLevel() {
  if (getScore() >= 50) {
    const advancedPromptText = `ADVANCED LEVEL!<br>
      Get more points and become richer.`;
    const topPrompt = document.querySelector('#top-prompt');
    const requiredCoins = document.querySelector('#coins-required');

    topPrompt.innerHTML = advancedPromptText;
    requiredCoins.textContent = '';
  }
}

// adding tilt for img
function imgTilt(event, rect) {
  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 40;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * DEG;

  circle.style.setProperty('--tiltX', `${tiltX}deg`);
  circle.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    circle.style.setProperty('--tiltX', `0deg`);
    circle.style.setProperty('--tiltY', `0deg`);
  }, 300);
}

//adding achievement's marker "+1" near by img
function addPlusOneMarker(event, rect) {
  const plusOneMarker = document.createElement('div');

  plusOneMarker.classList.add('plus-one-marker');
  plusOneMarker.textContent = '+1';
  plusOneMarker.style.left = `${event.clientX - rect.left}px`;
  plusOneMarker.style.top = `${event.clientY - rect.top}px`;

  circle.parentElement.appendChild(plusOneMarker);

  // launch func that increases amount of Achievement
  addOneVal();

  setTimeout(() => {
    plusOneMarker.remove();
  }, 2000);
}

//visual actions for Click on Lizard or Frog
circle.addEventListener('click', (event) => {
  event.preventDefault();
  const rect = event.target.getBoundingClientRect();

  // adding tilt for img
  imgTilt(event, rect);

  //---------------------------------------------

  //adding achievement's marker "+1" near by img

  addPlusOneMarker(event, rect);
  //---------------------------------------------

  //changing box-shadow color
  circle.style.boxShadow = '0px 0px 20px 10px rgba(238, 145, 31, 0.2)';

  setTimeout(() => {
    circle.style.boxShadow = '0px 0px 20px 0px rgba(89, 62, 102, 0.48)';
  }, 100);

  //---------------------------------------------
});

//start app and boots all echievements

startApp();
