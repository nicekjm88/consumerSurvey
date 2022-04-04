'use strict'

const program = require('commander');
const cp = require('child_process');
const fs = require('fs');

program
    .version('0.0.1', '-v, --version') // 버젼
    .usage('[options]') // 설명서(commander는 설명서를 자동생성해줌)
    .description('capgo upload')
    .option('-pv, --pversion <pversion>', 'production version')
    .alias('prod')
    .action((options) => {
        const rawdata = fs.readFileSync('./capacitor.config.json');
        const ccj = JSON.parse(rawdata.toString());

        cp.execSync(`capgo upload -v ${options.pversion} -a aea6b1da-a3f3-4686-9dd0-f86a11c45b52 ${ccj.appId}`, {stdio: 'inherit'});
    });

program.parse(process.argv);
