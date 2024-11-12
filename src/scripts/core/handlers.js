import { CIRCLE_ELEMENT, SCORE_ELEMENT } from '../utils/constants.js';

//handler
function circleHandler(event) {
  event.preventDefault();
  const rect = event.target.getBoundingClientRect();

  imgTilt(event, rect);

  addPlusOneMarker(event, rect);

  changeCircleShadow();
}

// adding tilt for img
function imgTilt(event, rect) {
  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 40;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * DEG;

  CIRCLE_ELEMENT.style.setProperty('--tiltX', `${tiltX}deg`);
  CIRCLE_ELEMENT.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    CIRCLE_ELEMENT.style.setProperty('--tiltX', `0deg`);
    CIRCLE_ELEMENT.style.setProperty('--tiltY', `0deg`);
  }, 300);
}

//adding achievement's marker "+1" near by img
function addPlusOneMarker(event, rect) {
  const plusOneMarker = document.createElement('div');

  plusOneMarker.classList.add('plus-one-marker');
  plusOneMarker.textContent = '+1';
  plusOneMarker.style.left = `${event.clientX - rect.left}px`;
  plusOneMarker.style.top = `${event.clientY - rect.top}px`;

  CIRCLE_ELEMENT.parentElement.appendChild(plusOneMarker);

  // launch func that increases amount of Achievement
  addOneVal();

  setTimeout(() => {
    plusOneMarker.remove();
  }, 2000);
}

//changing circle shadow color
function changeCircleShadow() {
  CIRCLE_ELEMENT.style.boxShadow = '0px 0px 20px 10px rgba(238, 145, 31, 0.2)';

  setTimeout(() => {
    CIRCLE_ELEMENT.style.boxShadow = '0px 0px 20px 0px rgba(89, 62, 102, 0.48)';
  }, 100);
}

// set new PICTURE when your score above 50
function setImage() {
  if (getScore() >= 50) {
    CIRCLE_ELEMENT.setAttribute('src', './assets/lizzard.png');
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

//scoreCalculation ///////////////////////////

//addOneVal() - implement +1 to amount of echievement
function addOneVal() {
  setScore(getScore() + 1);

  setNewLevel();
  setRequiredNmb();
  setImage();
}

function startApp() {
  setScore(getScore());
  setNewLevel();
  setImage();
  setRequiredNmb();
}

function setScore(scoreValue) {
  localStorage.setItem('score', scoreValue);
  SCORE_ELEMENT.textContent = scoreValue;
}

function getScore() {
  return Number(localStorage.getItem('score')) || 0;
}

export { circleHandler, startApp };
