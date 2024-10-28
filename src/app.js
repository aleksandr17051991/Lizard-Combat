const circle = document.querySelector('#circle');
const score = document.querySelector('#score');

circle.addEventListener('click', (event) => {
  event.preventDefault();

  // adding tilt for img
  const rect = event.target.getBoundingClientRect();

  const offsetX = event.clientX - rect.left - rect.width / 2;
  const offsetY = event.clientY - rect.top - rect.height / 2;

  const DEG = 50;

  const tiltX = (offsetY / rect.height) * DEG;
  const tiltY = (offsetX / rect.width) * DEG;

  circle.style.setProperty('--tiltX', `${tiltX}deg`);
  circle.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    circle.style.setProperty('--tiltX', `0deg`);
    circle.style.setProperty('--tiltY', `0deg`);
  }, 300);

  //adding echievement's marker "+1" near by img

  const plusOneMarker = document.createElement('div');

  plusOneMarker.classList.add('plus-one-marker');
  plusOneMarker.textContent = '+1';
  plusOneMarker.style.left = `${event.clientX - rect.left}px`;
  plusOneMarker.style.top = `${event.clientY - rect.top}px`;

  circle.parentElement.appendChild(plusOneMarker);

  setTimeout(() => {
    plusOneMarker.remove();
  }, 2000);
});
