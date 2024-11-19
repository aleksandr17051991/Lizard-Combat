/**
 * @jest-environment jsdom
 */

import { getScore } from '../../scoreCalculations.js';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(),
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Storage has initial score value', () => {
  test('getItem returns score=20', () => {
    const scoreInitValue = localStorage.getItem.mockReturnValue('20');
    const result = getScore();

    expect(localStorage.getItem).toHaveBeenCalledWith('score');

    expect(result).toBe(Number(scoreInitValue.mock.results[0].value));
  });
});

describe("Storage hasn't init value", () => {
  test('getItem return 0', () => {
    localStorage.getItem.mockReturnValue(undefined);
    const result = getScore();

    expect(result).toBe(0);
  });
});
