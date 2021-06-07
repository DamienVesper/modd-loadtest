import config from './config';

import randomInt from './utils/randomInt';
import log from './utils/log';

import { WebSocket } from '@clusterws/cws';
import randomString from './utils/randomString';

const createBot = async (id: number) => {
    const socket: WebSocket = new WebSocket(`${config.ssl ? `wss` : `ws`}://${config.ip}:${config.port}/?token=${config.token}`);

    socket.on(`open`, () => {
        log(`magenta`, `[${id}] Bot connected.`);

        const int = randomInt(1000, 2000);
        // const keys = [`w`, `a`, `s`, `d`];

        socket.send(JSON.stringify([`@`, `1`]));
        socket.send(JSON.stringify([`\n`, [0, 0]]));

        socket.send(JSON.stringify([`\u0004`, {
            number: int,
            _id: undefined,
            sessionId: randomString(32),
            isAdBlockEnabled: false
        }]));

        // for (let i = 0; i < keys.length; i++) socket.send(JSON.stringify([`\t`, { device: `key`, key: keys[i] }]));
        // socket.send(JSON.stringify([`\b`, { device: `key`, key: randomInt(0, keys.length - 1) }]));
    });

    socket.on(`error`, (err) => log(`red`, `[${id}] Bot failed to connect to server: ${err.message}.`));
    socket.on(`close`, () => log(`cyan`, `[${id}] Bot disconnected.`));

    return socket;
};

export default createBot;
