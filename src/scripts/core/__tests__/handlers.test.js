import { circleHandler } from '../handlers';
import {
  imgTilt,
  addPlusOneMarker,
  changeCircleShadow,
} from '../styleModifiers';

jest.mock('../styleModifiers', () => {
  return {
    imgTilt: jest.fn(),
    addPlusOneMarker: jest.fn(),
    changeCircleShadow: jest.fn(),
  };
});

describe('Testing circleHandler()', () => {
  test('Should call imgTilt, addPlusOneMarker, changeCircleShadow', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        getBoundingClientRect: jest.fn(() => {
          return {
            top: 0,
            left: 0,
            right: 100,
            bottom: 100,
            width: 100,
            height: 100,
          };
        }),
      },
    };

    circleHandler(event);

    expect(event.preventDefault).toHaveBeenCalled();

    expect(event.target.getBoundingClientRect).toHaveBeenCalled();

    expect(imgTilt).toHaveBeenCalledWith(event, expect.any(Object));

    expect(addPlusOneMarker).toHaveBeenCalledWith(event, expect.any(Object));

    expect(changeCircleShadow).toHaveBeenCalled();
  });
});
