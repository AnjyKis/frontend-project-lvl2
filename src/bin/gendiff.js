import { Command } from "commander";

const program = new Command();

export default () => {  
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1');

  program  
    .command('h')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'display help for command')

  program.parse();
};