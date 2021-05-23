import { name, version } from '../package.json';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface Args {
    ip: string
}

const argv = yargs(hideBin(process.argv)).options({
    ip: { type: `string`, default: `127.0.0.1` }
}).argv;

const config = {
    name,
    version,

    ip: (argv as Args).ip,
    port: process.env.NODE_ENV === `prod` ? 8750 : 8080
};

export default config;
