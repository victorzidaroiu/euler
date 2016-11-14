let cli = require('cli');
let fs = require('fs');
let debug = require('debug')('euler');

const problemNumber = cli.args[0] || null;
let problemFiles;

if (problemNumber) {
	const problemFiles = fs.readdirSync('./problems');

  for (let problemFile of problemFiles) {
    if (problemFile.startsWith(`${problemNumber}_`)) {
      debug(`Loaded ${problemFile} problem.`);
      let problem = require(`./problems/${problemFile}`);
      cli.args.shift();
      problem(cli.args);
    }
  }
}
else {
  debug('No problem number given.');
}
