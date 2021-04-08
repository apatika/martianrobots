import Board from '../../domain/models/board';
import Robot from '../../domain/models/robot';
import RightCommand from './RightCommand';

describe('RightCommand unit test', () => {
  test('should Change direction clockwise', () => {
    const MockBoard = new Board({ x: 5, y: 3 });
    const MockRobot = new Robot(MockBoard, { x: 3, y: 3, d: 'N' });
    const command = new RightCommand(MockRobot);
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 E');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 S');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 W');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('3 3 N');
  });
});
