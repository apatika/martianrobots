import Board from '../../domain/models/board';
import Robot from '../../domain/models/robot';
import { posVector } from '../../domain/types';
import ForwardCommand from './ForwardCommand';

describe('ForwardCommand unit test', () => {
  test('should Change position', () => {
    const MockBoard = new Board({ x: 2, y: 2 });
    const initPosition: posVector = { x: 0, y: 1, d: 'N' };
    const MockRobot = new Robot(MockBoard, initPosition);

    const command = new ForwardCommand(MockRobot);
    expect(MockRobot).toStrictEqual(command.robot);
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('0 2 N');
    command.execute();
    expect(MockRobot.getStringPosition()).toBe('0 2 N LOST');
  });
});
