import { circleHandler, startApp } from './core/handlers.js';
import { CIRCLE_ELEMENT } from './utils/constants.js';

//visual actions for Click on Lizard or Frog
CIRCLE_ELEMENT.addEventListener('click', circleHandler);

//start app and boots all echievements
startApp();
