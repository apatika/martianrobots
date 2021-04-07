import Board from '../domain/models/board';
import { coordinates } from '../domain/types';

const createBoard = (limits: coordinates): Board => {
  return new Board(limits);
};

export default createBoard;
