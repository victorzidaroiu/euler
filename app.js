let cli = require('cli');
let fs = require('fs');
let debug = require('debug')('euler');

debug(JSON.stringify(cli.args));

let problemNumber = cli.args[0] || null;

if (problemNumber) {
	fs.readdir('./problems', (err, files) =>  {
		debug(err);
		files.forEach((file) => {
			debug(JSON.stringify(file));
			if (file.includes(problemNumber + '_')) {
				debug(`Loaded ${file} problem.`);
				let problem = require(`./problems/${file}`);
				cli.args.shift();
				problem(cli.args);
			}
		});
	});
}
else
	debug('No problem number given.');