/**
 * @jest-environment jsdom
 */

import { setScore } from '../../scoreCalculations.js';

describe('setScore set new score to starage and add new value to SCORE_ELEMENT', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  describe('Would set score', () => {
    beforeEach(() => {
      jest.isolateModules(() => {
        jest.doMock('../../../utils/constants.js', () => {
          return {
            SCORE_ELEMENT: { textContent: '11' },
          };
        });
      });
    });

    test('set score to localStorage', () => {
      const scoreValue = '11';
      setScore(scoreValue);

      expect(localStorage.setItem).toHaveBeenCalledWith('score', scoreValue);
    });

    test('set new value to SCORE_ELEMENT', () => {
      const { SCORE_ELEMENT } = require('../../../utils/constants.js');
      const scoreValue = '11';
      setScore(scoreValue);

      expect(SCORE_ELEMENT.textContent).toBe(scoreValue);
    });
  });

  describe('Without SCORE_ELEMENT', () => {
    beforeEach(() => {
      // Изолируем модуль с моком SCORE_ELEMENT равным null
      jest.isolateModules(() => {
        jest.mock('../../../utils/constants.js', () => ({
          SCORE_ELEMENT: null,
        }));
      });
    });

    test("Wouldn't set score value in SCORE_ELEMENT", () => {
      const scoreValue = '50';
      const { SCORE_ELEMENT } = require('../../../utils/constants.js');
      setScore(scoreValue);

      expect(localStorage.setItem).toHaveBeenCalledWith('score', scoreValue);

      expect(SCORE_ELEMENT).toBeNull();
    });
  });
});
