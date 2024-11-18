import { SCORE_ELEMENT } from '../utils/constants.js';
import { setNewLevel, setImage, setRequiredNmb } from './styleModifiers.js';

//colect all initial values and web elements
function startApp() {
  setScore(getScore());
  setNewLevel();
  setImage();
  setRequiredNmb();
}

//set score to storage and into DOM-element
function setScore(scoreValue) {
  localStorage.setItem('score', scoreValue);
  if (SCORE_ELEMENT) {
    SCORE_ELEMENT.textContent = scoreValue;
  }
}

//get score from storage
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

export { addOneVal, startApp, setScore, getScore };
