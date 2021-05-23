import { name, version } from '../package.json';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface Args {
    ip: string,
    port: number,
    maxBots: number
}

const argv = yargs(hideBin(process.argv)).options({
    ip: { type: `string`, default: `127.0.0.1` },
    port: { type: `number`, default: 2000 },
    maxBots: { type: `number`, default: 1 }
}).argv;

const config = {
    name,
    version,

    ip: (argv as Args).ip,
    port: (argv as Args).port,
    maxBots: (argv as Args).maxBots
};

export default config;
