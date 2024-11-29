/**
 * @jest-environment jsdom
 */

import { CIRCLE_ELEMENT } from '../../../utils/constants.js';
import { addPlusOneMarker } from '../../styleModifiers.js';
import { addOneVal } from '../../scoreCalculations.js';

let mockCircleElement;

jest.mock('../../../utils/constants.js', () => {
  return {
    get CIRCLE_ELEMENT() {
      return mockCircleElement;
    },
  };
});

jest.mock('../../scoreCalculations.js', () => {
  return {
    addOneVal: jest.fn(),
  };
});

describe('Testing addPlusOneMarker', () => {
  let event;
  let rect;
  let parentBlock;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="circle">
      <img id="circle" src="./assets/frog.png" alt="frog">
    </div>
    `;

    parentBlock = document.querySelector('.circle');
    mockCircleElement = document.querySelector('#circle');

    event = {
      clientX: 100,
      clientY: 200,
    };
    rect = {
      left: 27,
      top: 114,
    };

    jest.useFakeTimers();

    addPlusOneMarker(event, rect);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  test('CIRCLE_ELEMENT and plusOneMarker have the same parent', () => {
    expect(CIRCLE_ELEMENT.parentElement).toBe(
      parentBlock.children[1].parentElement
    );

    expect(parentBlock.children.length).toBe(2);
  });

  test('addOneVal was called', () => {
    expect(addOneVal).toHaveBeenCalled();
  });

  test('plusOneMarker will be deleted after 2000ms', () => {
    jest.advanceTimersByTime(2000);

    expect(parentBlock.children.length).toBe(1);
  });
});
