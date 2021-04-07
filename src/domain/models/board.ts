import { coordinates } from '../types';
export default class Board {
  limits: coordinates;
  closePositions: coordinates[] = [];

  constructor(limits: coordinates) {
    this.limits = limits;
  }
  isOutside(coord: coordinates): boolean {
    return (
      coord.x > this.limits.x ||
      coord.y > this.limits.y ||
      coord.x < 0 ||
      coord.y < 0
    );
  }
  setClosePosition(closeposition: coordinates) {
    this.closePositions.push(closeposition);
  }

  isClosePosition(closeposition: coordinates): boolean {
    return this.closePositions.includes(closeposition);
  }
}
