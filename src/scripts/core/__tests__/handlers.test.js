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
      target: jest.fn,
      preventDefault: jest.fn(),
      getBoundingClientRect: jest.fn(() => {
        return {};
      }),
    };
    circleHandler(event);
  });
});
