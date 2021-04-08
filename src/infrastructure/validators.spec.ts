import Board from '../domain/models/board';
import {
  fromInputToCoordinates,
  fromInputToMovements,
  fromInputToVector,
} from './validators';

describe('Validator unit test', () => {
  test('fromInputToCoordinates', () => {
    expect(fromInputToCoordinates('0 0')).toEqual({ x: 0, y: 0 });
    expect(fromInputToCoordinates('30 30')).toEqual({ x: 30, y: 30 });
    expect(fromInputToCoordinates('51 30')).toBe(false);
    expect(fromInputToCoordinates('-1 0')).toEqual(false);
  });
  test('fromInputToMovements', () => {
    expect(fromInputToMovements('FLLRLRFLR')).toBe('FLLRLRFLR');
    expect(fromInputToMovements('FLLRLRFLR_XXX')).toBe('FLLRLRFLR');
  });
  test('fromInputToVector', () => {
    const MockBoard = new Board({ x: 10, y: 10 });
    expect(fromInputToVector(MockBoard, '11 10 N')).toBe(false);
    expect(fromInputToVector(MockBoard, '10 11 N')).toBe(false);
    expect(fromInputToVector(MockBoard, '-1 10 N')).toBe(false);
    expect(fromInputToVector(MockBoard, '10 10 N')).toEqual({
      x: 10,
      y: 10,
      d: 'N',
    });
    expect(fromInputToVector(MockBoard, '0 0 S')).toEqual({
      x: 0,
      y: 0,
      d: 'S',
    });
    expect(fromInputToVector(MockBoard, '0 0 E')).toEqual({
      x: 0,
      y: 0,
      d: 'E',
    });
    expect(fromInputToVector(MockBoard, '0 0 W')).toEqual({
      x: 0,
      y: 0,
      d: 'W',
    });
  });
});
