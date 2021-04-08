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
    return {
      x: this.position.x,
      y: this.position.y,
      d: this.position.d,
    };
  }
  setPosition(coords: coordinates) {
    this.position.x = coords.x;
    this.position.y = coords.y;
  }
  getCoordinate(): coordinates {
    return { x: this.position.x, y: this.position.y };
  }
  setLost() {
    this.position.l = 'LOST';
  }

  isLost(): boolean {
    return this.position.l ? true : false;
  }

  getStringPosition(): string {
    const result =
      this.position.x + ' ' + this.position.y + ' ' + this.position.d;

    return this.isLost() ? result + ' ' + this.position.l : result;
  }
}
