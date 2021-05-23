import config from './config';

import log from './utils/log';
import logSplash from './utils/logSplash';

logSplash();

log(`green`, `Connecting to ${config.ip}:${config.port}...`);
