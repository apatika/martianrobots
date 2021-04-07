import Robot from '../../domain/models/robot';
import { Command } from './interface';

export default class LeftCommand implements Command {
  robot: Robot;
  orientation: number;
  directions = ['N', 'E', 'S', 'W'];

  constructor(robot: Robot) {
    this.robot = robot;
    this.orientation = this.directions.indexOf(
      this.robot.getDirection(),
    );
  }
  execute() {
    this.orientation = ((--this.orientation % 4) + 4) % 4;
    this.robot.setDirection(this.directions[this.orientation]);
  }
}
