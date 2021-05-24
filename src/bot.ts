import config from './config';

import randomInt from './utils/randomInt';
import log from './utils/log';

import { WebSocket } from '@clusterws/cws';

const createBot = async (id: number) => {
    const socket: WebSocket = new WebSocket(`${config.ssl ? `wss` : `ws`}://${config.ip}:${config.port}/?token=${config.token}`);

    socket.on(`open`, async () => {
        log(`magenta`, `[${id}] Bot connected.`);

        socket.send(JSON.stringify([`@`, `1`]));

        const int = randomInt(1000, 2000);
        socket.send(JSON.stringify([`\u0004`, { number: int, isAdBlockEnabled: false }]));
        socket.send(JSON.stringify([`\n`, [0, 0]]));
    });

    socket.on(`error`, async (err) => log(`red`, `[${id}] Bot failed to connect to server: ${err.message}.`));
    socket.on(`close`, async () => log(`cyan`, `[${id}] Bot disconnected.`));

    return socket;
};

export default createBot;
