/**
 * @jest-environment jsdom
 */

import { getScore } from '../../scoreCalculations.js';
import { setNewLevel } from '../../styleModifiers.js';

jest.mock('../../scoreCalculations.js', () => {
  return {
    getScore: jest.fn(),
  };
});

describe('Testing setNewScore depending on getScore value', () => {
  let topPromptElement;
  let requiredCoinsElement;
  const expectedContent = `ADVANCED LEVEL!<br>Get more points and become richer.`;

  beforeEach(() => {
    document.body.innerHTML = `
    <p id="top-prompt">Taping this frog and reach NEXT LEVEL !</p>
    <p id="coins-required">Number of coins required: something</p>
  
  `;
    topPromptElement = document.querySelector('#top-prompt');
    requiredCoinsElement = document.querySelector('#coins-required');
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  test('If getScore > 50: topPrompt block will changes / requiredCoins block will empty', () => {
    getScore.mockReturnValue(54);
    setNewLevel();

    expect(topPromptElement.innerHTML).toBe(expectedContent);

    expect(requiredCoinsElement.textContent).toBe('');
  });

  test('If getScore = 50: topPrompt block will changes / requiredCoins block will empty', () => {
    getScore.mockReturnValue(50);
    setNewLevel();

    expect(topPromptElement.innerHTML).toBe(expectedContent);

    expect(requiredCoinsElement.textContent).toBe('');
  });

  test("If getScore < 50: topPrompt block won't changes / requiredCoins block will has content", () => {
    getScore.mockReturnValue(33);
    setNewLevel();

    expect(topPromptElement.innerHTML).not.toBe(expectedContent);

    expect(topPromptElement.textContent).toBe(
      'Taping this frog and reach NEXT LEVEL !'
    );

    expect(requiredCoinsElement.textContent).toBe(
      'Number of coins required: something'
    );
  });
});
