import { coordinates } from '../types';
export default class Board {
  limits: coordinates;
  closePositions: Set<string>;

  constructor(limits: coordinates) {
    this.limits = limits;
    this.closePositions = new Set();
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
    this.closePositions.add(JSON.stringify(closeposition));
  }

  isClosePosition(closeposition: coordinates): boolean {
    return this.closePositions.has(JSON.stringify(closeposition));
  }
}
