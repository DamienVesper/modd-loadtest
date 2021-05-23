import config from './config';

import randomInt from './utils/randomInt';
import log from './utils/log';

import { WebSocket } from '@clusterws/cws';

const createBot = () => {
    const socket: WebSocket = new WebSocket(`ws://${config.ip}:${config.port}`, `netio1`);

    socket.on(`open`, () => {
        log(`magenta`, `Bot connected.`);

        socket.send(JSON.stringify([`@`, `1`]));

        const int = randomInt(1000, 2000);
        socket.send(JSON.stringify([`\u0004`, { number: int, isAdBlockEnabled: false }]));
        socket.send(JSON.stringify([`\n`, [0, 0]]));

        setInterval(() => {
            const keys = [`w`, `a`, `s`, `d`];
            const int = randomInt(0, keys.length - 1);

            for (let i = 0; i < keys.length; i++) socket.send(JSON.stringify([`\t`, { device: `key`, key: keys[i] }]));
            socket.send(JSON.stringify([`\b`, { device: `key`, key: keys[int] }]));
        }, 500);
    });

    socket.on(`close`, () => {
        log(`red`, `Bot disconnected.`);
    });

    return socket;
};

export default createBot;
