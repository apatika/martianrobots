import { coordinates } from '../types';
import Board from './board';

describe('Board unit test', () => {
  test('check limits', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    expect(MockBoard.isOutside({ x: 10, y: 10 })).toBe(false);
    expect(MockBoard.isOutside({ x: -1, y: 0 })).toBe(true);
    expect(MockBoard.isOutside({ x: 0, y: -1 })).toBe(true);
    expect(MockBoard.isOutside({ x: 0, y: 0 })).toBe(false);
    expect(MockBoard.isOutside({ x: -1, y: -1 })).toBe(true);
    expect(MockBoard.isOutside({ x: 9, y: 9 })).toBe(false);
    expect(MockBoard.isOutside({ x: 11, y: 10 })).toBe(true);
    expect(MockBoard.isOutside({ x: 10, y: 11 })).toBe(true);
    expect(MockBoard.isOutside({ x: 11, y: 11 })).toBe(true);
  });
  test('check ClosePosition', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    const position: coordinates = { x: 3, y: 10 };
    const position2: coordinates = { x: 4, y: 10 };
    MockBoard.setClosePosition(position);
    expect(MockBoard.isClosePosition(position)).toBe(true);
    expect(MockBoard.isClosePosition(position2)).toBe(false);
  });
});
