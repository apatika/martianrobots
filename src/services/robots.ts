import commands from '../application/commands';
import Board from '../domain/models/board';
import Robot from '../domain/models/robot';
import { posVector } from '../domain/types';

const letterToCommands: any = {
  L: commands.LeftCommand,
  R: commands.RightCommand,
  F: commands.ForwardCommand,
};

const moveRobots = (
  board: Board,
  position: posVector,
  movement: string,
) => {
  const robot = new Robot(board, position);
  let contador = 1;
  console.log('Comando Total>>> ', movement);
  for (let index = 0; index < movement.length; index++) {
    const command = new letterToCommands[movement.charAt(index)](
      robot,
    );
    command.execute();
    console.log(
      'Comando ' + contador++ + ' ' + movement.charAt(index) + '>> ',
      robot.getStringPosition(),
    );
    if (robot.isLost()) break;
  }

  return robot.getStringPosition();
};

export default moveRobots;
