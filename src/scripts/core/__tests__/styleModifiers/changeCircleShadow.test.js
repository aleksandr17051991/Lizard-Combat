/**
 * @jest-environment jsdom
 */

import { CIRCLE_ELEMENT } from '../../../utils/constants.js';
import { changeCircleShadow } from '../../styleModifiers.js';

let mockCircleElement;

jest.mock('../../../utils/constants.js', () => {
  return {
    get CIRCLE_ELEMENT() {
      return mockCircleElement;
    },
  };
});

describe("Setting new circl's shadow and after 100 ms returning initial shadow", () => {
  beforeEach(() => {
    mockCircleElement = document.createElement('img');
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  test('Set new boxShadow', () => {
    changeCircleShadow();

    expect(CIRCLE_ELEMENT.style.boxShadow).toBe(
      '0px 0px 20px 10px rgba(238, 145, 31, 0.2)'
    );
  });

  test('setTimeout return initial circle shadow', () => {
    changeCircleShadow();

    jest.advanceTimersByTime(100);

    expect(CIRCLE_ELEMENT.style.boxShadow).toBe(
      '0px 0px 20px 0px rgba(89, 62, 102, 0.48)'
    );
  });
});
