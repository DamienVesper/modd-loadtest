import config from './config';

import log from './utils/log';
import logSplash from './utils/logSplash';

import createBot from './bot';

const createBots = async () => {
    logSplash();

    log(`green`, `Connecting to ${config.ip}:${config.port}...`);
    log(`cyan`, `Creating ${config.maxBots} bots...`);

    for (let i = 0; i < config.maxBots; i++) createBot(i);

    log(`yellow`, `Bot creation complete. Press ^C to exit.`);
};

createBots();
