/**
 * @jest-environment jsdom
 */

import { CIRCLE_ELEMENT } from '../../../utils/constants.js';
import { setImage } from '../../styleModifiers.js';
import { getScore } from '../../scoreCalculations.js';

let mockCircleElement;

jest.mock('../../../utils/constants.js', () => {
  return {
    get CIRCLE_ELEMENT() {
      return mockCircleElement;
    },
  };
});

jest.mock('../../scoreCalculations.js', () => {
  return {
    getScore: jest.fn(),
  };
});

describe('Testing setImage with different getScore values', () => {
  beforeEach(() => {
    mockCircleElement = document.createElement('img');
    mockCircleElement.setAttribute('src', './assets/frog.png');
    document.body.appendChild(mockCircleElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  test('getScore value > 50, image will change on lizard', () => {
    getScore.mockReturnValue(69);
    setImage();

    expect(CIRCLE_ELEMENT.getAttribute('src')).toBe('./assets/lizzard.png');
  });

  test('getScore value = 50, image will change on lizard', () => {
    getScore.mockReturnValue(50);
    setImage();

    expect(CIRCLE_ELEMENT.getAttribute('src')).toBe('./assets/lizzard.png');
  });

  test('getScore value < 50, image will change on lizard', () => {
    getScore.mockReturnValue(34);
    setImage();

    expect(CIRCLE_ELEMENT.getAttribute('src')).not.toBe('./assets/lizzard.png');

    expect(CIRCLE_ELEMENT.getAttribute('src')).toBe('./assets/frog.png');
  });
});
