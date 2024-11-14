import {
  imgTilt,
  addPlusOneMarker,
  changeCircleShadow,
} from './styleModifiers.js';

//handler
function circleHandler(event) {
  console.log(event);
  event.preventDefault();
  const rect = event.target.getBoundingClientRect();

  imgTilt(event, rect);

  addPlusOneMarker(event, rect);

  changeCircleShadow();
}

export { circleHandler };
