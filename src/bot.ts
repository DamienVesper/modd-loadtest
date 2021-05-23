import config from './config';
import { WebSocket } from '@clusterws/cws';

const createBot = () => {
    const ws = new WebSocket(`ws://${config.ip}:${config.port}`, `netio1`);
    ws.on(`open`, (connection: WebSocket) => {

    });
};

export default createBot;