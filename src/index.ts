import config from './config';

import log from './utils/log';
import { logHeader, logSplash } from './utils/logExtra';

import createBot from './bot';

/**
 * Create the bots in an asynchronous loop.
 */
const createBots = async (): Promise<void> => {
    logSplash();

    log(`green`, `Connecting to ${config.ip}:${config.port}...`);
    log(`cyan`, `Creating ${config.maxBots} bots...`);

    logHeader();
    for (let i = 0; i < config.maxBots; i++) void createBot(i);

    log(`yellow`, `Bot creation complete. Press ^C to exit.`);
    logHeader();
};

void createBots();
