/**
 * @jest-environment jsdom
 */

import { SCORE_ELEMENT } from '../../../utils/constants.js';
import { setScore } from '../../scoreCalculations.js';

let mockScoreElement;

jest.mock('../../../utils/constants.js', () => {
  return {
    get SCORE_ELEMENT() {
      return mockScoreElement;
    },
  };
});

describe('Testing setScore', () => {
  let scoreValue;

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('SCORE_ELEMENT exists', () => {
    beforeEach(() => {
      mockScoreElement = document.createElement('div');
      document.body.appendChild(mockScoreElement);

      scoreValue = '45';
      setScore(scoreValue);
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    test('set scoreValue to localStorage', () => {
      expect(localStorage.setItem).toHaveBeenCalledWith('score', scoreValue);
    });

    test('set new value to SCORE_ELEMENT', () => {
      expect(SCORE_ELEMENT.textContent).toBe(scoreValue);
    });
  });

  describe('SCORE_ELEMENT is null', () => {
    beforeEach(() => {
      mockScoreElement = null;
      scoreValue = '110';

      setScore(scoreValue);
    });

    test('set scoreValue to localStorage', () => {
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);

      expect(localStorage.setItem).toHaveBeenCalledWith('score', scoreValue);
    });

    test('SCORE_ELEMENT expect TypeError with textContent property', () => {
      expect(SCORE_ELEMENT).toBeNull();

      expect(() => SCORE_ELEMENT.textContent).toThrow(TypeError);
    });
  });
});
