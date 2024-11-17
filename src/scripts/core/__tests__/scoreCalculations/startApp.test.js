import { startApp, setScore, getScore } from '../../scoreCalculations.js';
import { setNewLevel, setImage, setRequiredNmb } from '../../styleModifiers.js';

const STORAGED_SCORE = 10;

jest.mock('../../scoreCalculations.js', () => {
  return {
    setScore: jest.fn(),
    getScore: jest.fn(() => 10),
  };
});

jest.mock('../../styleModifiers.js', () => {
  return {
    setNewLevel: jest.fn(),
    setImage: jest.fn(),
    setRequiredNmb: jest.fn(),
  };
});

describe('Testing startApp function', () => {
  // beforeEach(() => {
  //   startApp();
  // });

  describe('Inizialise start score number', () => {
    test('setScore has argument getScore', () => {
      startApp();

      expect(setScore).toHaveBeenCalledWith(STORAGED_SCORE);
    });
  });
});
