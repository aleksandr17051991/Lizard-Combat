/**
 * @jest-environment jsdom
 */

describe('Circle element have handler', () => {
  let CIRCLE_ELEMENT;
  let mockClickHandler;

  beforeAll(() => {
    document.body.innerHTML = `
    <div class="circle">Circle element</div>
    `;

    mockClickHandler = jest.fn();
    CIRCLE_ELEMENT = document.querySelector('.circle');

    CIRCLE_ELEMENT.addEventListener('click', mockClickHandler);
  });

  test('Click on circle and handler start working', () => {
    CIRCLE_ELEMENT.click();

    expect(mockClickHandler).toHaveBeenCalled();
  });
});
