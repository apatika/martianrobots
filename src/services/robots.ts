import Board from '../domain/models/board';
import Robot from '../domain/models/robot';
import { posVector } from '../domain/types';

const moveRobots = (
  board: Board,
  initPosition: posVector,
  movement: string,
) => {
  const robot = new Robot(board, initPosition);
  return robot.move(movement);
};

export default moveRobots;
