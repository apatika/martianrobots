import { coordinates } from '../types';
export default class Board {
  limits: coordinates;
  constructor(limits: coordinates) {
    this.limits = limits;
  }
  isOutside(coord: coordinates): boolean {
    return coord.x > this.limits.x || coord.y > this.limits.y;
  }
}
