/**
 * @jest-environment jsdom
 */

import { startApp } from '../../scoreCalculations.js';
import { setNewLevel, setImage, setRequiredNmb } from '../../styleModifiers.js';

// Мокаем функции из styleModifiers
jest.mock('../../styleModifiers.js', () => ({
  __esModule: true,
  setNewLevel: jest.fn(),
  setImage: jest.fn(),
  setRequiredNmb: jest.fn(),
}));

describe('Testing startApp function', () => {
  beforeEach(() => {
    // Запускаем функцию startApp, которая будет тестироваться
    startApp();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Очистка моков после каждого теста
  });

  test('setNewLevel, setImage, setRequiredNmb are called', () => {
    // Проверяем, что другие функции были вызваны
    expect(setNewLevel).toHaveBeenCalled();
    expect(setImage).toHaveBeenCalled();
    expect(setRequiredNmb).toHaveBeenCalled();
  });
});
