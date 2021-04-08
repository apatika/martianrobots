import Board from '../../domain/models/board';
import Robot from '../../domain/models/robot';
import LeftCommand from './LeftCommand';

describe('LeftCommand unit test', () => {
  test('should Change direction anticlockwise', () => {
    const MockBoard = new Board({ x: 5, y: 3 });
    const MockRobot = new Robot(MockBoard, { x: 3, y: 3, d: 'N' });
    const command = new LeftCommand(MockRobot);
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 W');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 S');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 E');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 N');
  });
});
