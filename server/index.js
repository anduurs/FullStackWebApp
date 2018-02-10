import server from './server';
import config from './config';

const PORT = config.port;

server.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});