import Board from './board';
import Robot from './robot';

describe('Robot unit test', () => {
  test('check Robot methods', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    const MockRobot = new Robot(MockBoard, { x: 10, y: 10, d: 'N' });
    MockRobot.setDirection('S');
    expect(MockRobot.getStringPosition()).toBe('10 10 S');
    MockRobot.setPosition({ x: 5, y: 5 });
    expect(MockRobot.getStringPosition()).toBe('5 5 S');
    MockRobot.setPosition({ x: 0, y: 0 });
    expect(MockRobot.getStringPosition()).toBe('0 0 S');
  });
});
