/**
 * @jest-environment jsdom
 */

import { addOneVal } from '../../scoreCalculations.js';

import { setNewLevel, setRequiredNmb, setImage } from '../../styleModifiers';

jest.mock('../../styleModifiers', () => {
  return {
    setNewLevel: jest.fn(),
    setRequiredNmb: jest.fn(),
    setImage: jest.fn(),
  };
});

test('addObneVal calls style modifiers: setNewLevel, setRequiredNmb, setImage', () => {
  addOneVal();

  expect(setNewLevel).toHaveBeenCalled();

  expect(setRequiredNmb).toHaveBeenCalled();

  expect(setImage).toHaveBeenCalled();
});
