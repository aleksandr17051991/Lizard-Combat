/**
 * @jest-environment jsdom
 */

import { CIRCLE_ELEMENT } from '../../../utils/constants.js';
import { imgTilt } from '../../styleModifiers.js';

let mockCircleElement;

jest.mock('../../../utils/constants.js', () => {
  return {
    get CIRCLE_ELEMENT() {
      return mockCircleElement;
    },
  };
});

describe('Testing imgTilt function', () => {
  let event;
  let rect;

  beforeEach(() => {
    event = {
      clientX: 593,
      clientY: 505,
    };

    rect = {
      top: 346,
      left: 434,
      width: 300,
      height: 300,
    };

    mockCircleElement = document.createElement('img');
    document.body.appendChild(mockCircleElement);

    jest.useFakeTimers();

    imgTilt(event, rect);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("CIRCLE_ELEMENT's transform property gets rotateX = 1.2deg / rotateY= 1.2deg", () => {
    expect(CIRCLE_ELEMENT.style._values['--tiltX']).toBe('1.2deg');

    expect(CIRCLE_ELEMENT.style._values['--tiltY']).toBe('1.2deg');
  });

  test('After 300ms rotateX = 0deg / rotateY = 0deg', () => {
    jest.advanceTimersByTime(300);

    expect(CIRCLE_ELEMENT.style._values['--tiltX']).toBe('0deg');

    expect(CIRCLE_ELEMENT.style._values['--tiltY']).toBe('0deg');
  });
});
