import config from './config';

import randomInt from './utils/randomInt';
import log from './utils/log';

import { WebSocket } from '@clusterws/cws';

const createBot = () => {
    const socket: WebSocket = new WebSocket(`ws://${config.ip}:${config.port}`, `netio1`);

    socket.onopen = () => {
        log(`magenta`, `Bot connected.`);

        socket.send(JSON.stringify([`@`, `1`]));

        const int = randomInt(1000, 1999);
    };

    return socket;
};

export default createBot;
