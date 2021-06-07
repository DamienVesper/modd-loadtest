import config from './config';

import randomInt from './utils/randomInt';
import log from './utils/log';

import { WebSocket } from '@clusterws/cws';

const createBot = async (id: number) => {
    const socket: WebSocket = new WebSocket(`${config.ssl ? `wss` : `ws`}://${config.ip}:${config.port}/?token=${config.token}`);

    socket.on(`open`, () => {
        log(`magenta`, `[${id}] Bot connected.`);

        const int = randomInt(1000, 2000);
        socket.send(JSON.stringify([`@`, `1`]));

        socket.send(JSON.stringify([`\u0004`, { number: int, isAdBlockEnabled: false }]));
        socket.send(JSON.stringify([`\n`, [0, 0]]));
    });

    socket.on(`error`, (err) => log(`red`, `[${id}] Bot failed to connect to server: ${err.message}.`));
    socket.on(`close`, () => log(`cyan`, `[${id}] Bot disconnected.`));

    return socket;
};

export default createBot;
