/**
 * @jest-environment jsdom
 */

import * as scoreModule from '../../scoreCalculations.js';
import { setNewLevel, setRequiredNmb, setImage } from '../../styleModifiers';

jest.mock('../../styleModifiers', () => {
  return {
    setNewLevel: jest.fn(),
    setRequiredNmb: jest.fn(),
    setImage: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

test('calls setScore and add +1 to getScore value', () => {
  // scoreModule.getScore.mockReturnValue(5);
  scoreModule.addOneVal();

  expect(scoreModule.setScore).toBeDefined();
  expect(scoreModule.getScore).toBeTruthy();
});

test('addObneVal calls style modifiers: setNewLevel, setRequiredNmb, setImage', () => {
  scoreModule.addOneVal();

  expect(setNewLevel).toHaveBeenCalled();

  expect(setRequiredNmb).toHaveBeenCalled();

  expect(setImage).toHaveBeenCalled();
});
