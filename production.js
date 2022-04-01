const program = require('commander');
const updator = require('capacitor-updater');
const util = require('util');
const { spawnSync } = require('child_process');

// const chalk = require('chalk');

program
    .version('0.0.1', '-v, --version') // 버젼
    .usage('[options]') // 설명서(commander는 설명서를 자동생성해줌)
    // .command('production')
    .description('capgo upload')
    .option('-uv, --uversion <uversion>', 'upload version')
    .alias('prod')
    .action((options) => {
        // console.log(chalk.red('멋쟁이!!'));
        console.log('abcd');
        console.log(options.uversion);
        console.log(options)
        const cg = spawnSync('capgo', ['-h']);
        console.log(cg);

        // updator.CapacitorUpdater.list().then((r) => {
        //     console.log(r.versions);
        // });
    });

program.parse(process.argv);
