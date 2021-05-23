import config from '../config';

const logSplash = () => {
    console.log(`\x1b[34m`, `${config.name} | Modd.IO Bot Load Test | v${config.version}`);
    console.log(`\x1b[34m`, `--------------------------------------------------`);
};

export default logSplash;
