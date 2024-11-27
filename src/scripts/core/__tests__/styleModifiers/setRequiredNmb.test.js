/**
 * @jest-environment jsdom
 */

import { setRequiredNmb } from '../../styleModifiers.js';
import { getScore } from '../../scoreCalculations.js';

jest.mock('../../scoreCalculations.js', () => {
  return {
    getScore: jest.fn(),
  };
});

describe('Testing setRequiredNmb', () => {
  let requiredNmbField;

  beforeEach(() => {
    document.body.innerHTML = `<span id="required-number"></span>`;
    requiredNmbField = document.querySelector('#required-number');
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  test('If score 0, required number will be 50', () => {
    getScore.mockReturnValue(0);
    setRequiredNmb();

    expect(requiredNmbField.textContent).toBe('50');
  });

  test('If score 40, required number will be 10', () => {
    getScore.mockReturnValue(40);
    setRequiredNmb();

    expect(requiredNmbField.textContent).toBe('10');
  });

  test("If score is 50, won't be required number", () => {
    getScore.mockReturnValue(50);
    setRequiredNmb();

    expect(requiredNmbField.textContent).toBe('');
  });

  test("If score is above 50, won't be required number", () => {
    getScore.mockReturnValue(900);
    setRequiredNmb();

    expect(requiredNmbField.textContent).toBe('');
  });
});
