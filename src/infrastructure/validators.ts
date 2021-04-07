import { MAXIMUMCOMMANDLENGTH, MAXIMUMCOORDVALUE } from '../config';
import Board from '../domain/models/board';
import { coordinates, posVector } from '../domain/types';

export const fromInputToCoordinates = (
  coords: string,
): false | coordinates => {
  const [x, y] = coords.split(' ');
  const _coords = { x: parseInt(x), y: parseInt(y) };
  if (
    _coords.x <= MAXIMUMCOORDVALUE &&
    _coords.y <= MAXIMUMCOORDVALUE
  ) {
    return _coords;
  } else {
    return false;
  }
};

export const fromInputToVector = (
  board: Board,
  vector: string,
): false | posVector => {
  const [x, y, d] = vector.split(' ');

  if (!['N', 'S', 'E', 'W'].includes(d)) {
    console.log('Robot initial direction is wrong');
    return false;
  }

  const _vector = { x: parseInt(x), y: parseInt(y), d: d };

  if (board.isOutside({ x: _vector.x, y: _vector.y })) {
    console.log('Robot initial position is out of Board');
    return false;
  }
  return _vector;
};

export const fromInputToMovements = (
  movements: string,
): false | string => {
  if (movements.length >= MAXIMUMCOMMANDLENGTH) {
    return false;
  }
  const _movements = movements
    .split('')
    .filter((letter) => ['F', 'R', 'L'].includes(letter))
    .join('');
  return _movements;
};
