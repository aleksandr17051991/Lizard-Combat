import { setImage } from '../../styleModifiers.js';
import { getScore } from '../../scoreCalculations.js';

jest.mock('../../scoreCalculations.js', () => {
  return {
    getScore: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});
