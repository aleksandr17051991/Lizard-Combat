const circle = document.querySelector('#circle');
const score = document.querySelector('#score');

// Creat logic for start and restart web page. Boots all score from localStorage

function startApp() {
  setScore(getScore());
  setImage();
}

function setScore(scoreValue) {
  localStorage.setItem('score', scoreValue);
  score.textContent = scoreValue;
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0;
}

//addOneVal() - implement +1 to amount of echievement

function addOneVal() {
  setScore(getScore() + 1);
  setImage();
}

// set new PICTURE when your score above 50

function setImage() {
  if (getScore() >= 50) {
    circle.setAttribute('src', './assets/lizzard.png');
  }
}

//visual actions for Click on Lizard or Frog
circle.addEventListener('click', (event) => {
  event.preventDefault();

  // adding tilt for img
  const rect = event.target.getBoundingClientRect();

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
  //---------------------------------------------

  //adding achievement's marker "+1" near by img

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
