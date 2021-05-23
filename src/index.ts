import config from './config';

import log from './utils/log';
import logSplash from './utils/logSplash';

import createBot from './bot';

logSplash();

log(`green`, `Connecting to ${config.ip}:${config.port}...`);

for (let i = 0; i < config.maxBots; i++) createBot();

log(`yellow`, `Bot creation complete. Press ^C to exit.`);
