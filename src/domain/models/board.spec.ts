import Board from './board';

describe('Board unit test', () => {
  test('check limits', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    expect(MockBoard.isOutside({ x: 10, y: 10 })).toBe(false);
    expect(MockBoard.isOutside({ x: 9, y: 9 })).toBe(false);
    expect(MockBoard.isOutside({ x: 11, y: 10 })).toBe(true);
    expect(MockBoard.isOutside({ x: 10, y: 11 })).toBe(true);
    expect(MockBoard.isOutside({ x: 11, y: 11 })).toBe(true);
  });
});
