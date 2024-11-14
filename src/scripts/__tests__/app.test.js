/**
 * @jest-environment jsdom
 */

import { circleHandler } from '../core/handlers.js';

jest.mock('../core/handlers.js', () => {
  return {
    circleHandler: jest.fn(),
  };
});

describe("Circle element's event calls handler", () => {
  let CIRCLE_ELEMENT;

  beforeAll(() => {
    document.body.innerHTML = `
    <div class="circle">Circle element</div>
    `;

    CIRCLE_ELEMENT = document.querySelector('.circle');

    CIRCLE_ELEMENT.addEventListener('click', circleHandler);
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  test('Click on circle and handler start working', () => {
    CIRCLE_ELEMENT.click();

    expect(circleHandler).toHaveBeenCalled();
  });
});
