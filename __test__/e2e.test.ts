import Board from '../src/domain/models/board';
import {
  fromInputToCoordinates,
  fromInputToMovements,
  fromInputToVector,
} from '../src/infrastructure/validators';
import { createBoard, moveRobots } from '../src/services';

describe('E2E test', () => {
  test('Simulate controller logic', () => {
    let Board: Board;
    let input = ['2 2 N', 'F', '2 1 N', 'FF'];
    const coordinates = fromInputToCoordinates('2 2');
    if (coordinates) {
      Board = createBoard(coordinates);
    } else {
      return false;
    }
    const result = [];
    for (let index = 0; index <= input.length - 2; index += 2) {
      const initPosition = fromInputToVector(Board, input[index]);
      const movement = fromInputToMovements(input[index + 1]);
      if (initPosition && movement) {
        result.push(moveRobots(Board, initPosition, movement));
      }
    }

    expect(Board.closePositions.size).toBe(1);
    expect(result[0]).toBe('2 2 N LOST');
    expect(result[1]).toBe('2 2 N');
  });

  test('Simulate controller logic', () => {
    let Board: Board;
    let input = [
      //'1 1 E',
      //'RFRFRFRF',
      '3 2 N',
      'FRRFLLFFRRFLL',
      '0 3 W',
      'LLFFFLFLFL',
    ];
    const coordinates = fromInputToCoordinates('5 3');
    if (coordinates) {
      Board = createBoard(coordinates);
    } else {
      return false;
    }
    const result = [];
    for (let index = 0; index <= input.length - 2; index += 2) {
      const initPosition = fromInputToVector(Board, input[index]);
      const movement = fromInputToMovements(input[index + 1]);
      if (initPosition && movement) {
        result.push(moveRobots(Board, initPosition, movement));
      }
    }

    expect(Board.isClosePosition({ x: 3, y: 3 })).toBe(true);
    //expect(result[0]).toBe('1 1 E');
    expect(result[0]).toBe('3 3 N LOST');
    expect(result[1]).toBe('2 3 S');
  });
});
