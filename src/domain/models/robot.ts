import { coordinates, posVector } from '../types';
import Board from './board';

export default class Robot {
  position: posVector;
  board: Board;
  constructor(board: Board, position: posVector) {
    this.position = position;
    this.board = board;
  }
  getDirection(): string {
    return this.position.d;
  }
  setDirection(direction: any) {
    this.position.d = direction;
  }
  getPosition(): posVector {
    return this.position;
  }
  getCoordinate(): coordinates {
    return { x: this.position.x, y: this.position.y };
  }
  setLost() {
    this.position.l = 'LOST';
  }

  getStringPosition(): string {
    const result =
      this.position.x + ' ' + this.position.x + ' ' + this.position.d;

    return this.position.l ? result + ' ' + this.position.l : result;
  }
}
