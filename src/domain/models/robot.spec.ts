import Board from './board';
import Robot from './robot';

describe('Robot unit test', () => {
  test('check limits', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    const MockRobot = new Robot(MockBoard, { x: 10, y: 10, d: 'N' });
    MockRobot.setDirection('S');
    expect(MockRobot.getStringPosition()).toBe('10 10 S');
  });
});
