import chalk from 'chalk';
import Board from '../domain/models/board';
import { createBoard, moveRobots } from '../services';
import {
  fromInputToCoordinates,
  fromInputToMovements,
  fromInputToVector,
} from './validators';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const start = () => {
  console.log(chalk.blue('> Insert the limits of the Board: '));
  let input: string[] = [];

  rl.on('line', (line: string) => {
    if (line === 'q' || line === 'Q') {
      return rl.close();
    }

    input.push(line);

    if (input.length === 1) {
      console.log(
        chalk.blue(
          '> Insert new Robot init coordinates and movements: ',
        ),
      );
    } else if (input.length % 2 !== 0) {
      console.log(
        chalk.blue(
          '> Press q and ENTER to see Results or add a new Robot: ',
        ),
      );
    }
  });

  rl.on('close', () => {
    let Board: Board;
    const coordinates = fromInputToCoordinates(input[0]);
    if (coordinates) {
      Board = createBoard(coordinates);
    } else {
      console.log(chalk.red('Bad Board limits'));
      process.exit(0);
    }

    for (let index = 1; index <= input.length - 2; index += 2) {
      const initPosition = fromInputToVector(Board, input[index]);
      const movement = fromInputToMovements(input[index + 1]);
      if (initPosition && movement) {
        console.log(
          chalk.green(moveRobots(Board, initPosition, movement)),
        );
      }
    }

    console.log(chalk.green('Have a great day!'));
    process.exit(0);
  });
};

export default start;
