import chalk from 'chalk';
import readline from 'readline';
import { getDataFromPrompt, processData } from './middleware';

const start = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(
    chalk.blue('> Insert the limits of the Martian World: '),
  );

  let input: string[] = [];

  rl.on('line', (line) => getDataFromPrompt(line, input, rl));

  rl.on('close', () => processData(input));
};

export default start;
