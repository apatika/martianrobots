import { posVector } from '../types';
import Board from './board';

export default class Robot {
  position: posVector;
  board: Board;
  constructor(board: Board, position: posVector) {
    this.position = position;
    this.board = board;
  }
  move(movement: string) {
    return 'ROBOT>>' + movement;
  }
}
