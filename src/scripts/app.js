import { CIRCLE_ELEMENT } from './utils/constants.js';
import { circleHandler } from './core/handlers.js';
import { startApp } from './core/scoreCalculations.js';

//visual actions for Click on Lizard or Frog
CIRCLE_ELEMENT.addEventListener('click', circleHandler);

//start app and boots all echievements
startApp();
