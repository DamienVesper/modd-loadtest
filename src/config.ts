import { name, version } from '../package.json';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface Args {
    ip: string
    ssl: boolean
    port: number
    token: string
    maxBots: number
}

/**
 * Passable arguments to the node CLI.
 */
const argv = (yargs(hideBin(process.argv)).options({
    ip: { type: `string`, default: `127.0.0.1` },
    ssl: { type: `boolean`, default: false },
    port: { type: `number`, default: 2001 },
    token: { type: `string`, default: `abc` },
    maxBots: { type: `number`, default: 50 }
}).argv as Args);

/**
 * Configuration for the program.
 */
const config = {
    name,
    version,

    ip: argv.ip,
    ssl: argv.ssl,
    port: argv.port,

    token: argv.token,
    maxBots: argv.maxBots
};

export default config;
