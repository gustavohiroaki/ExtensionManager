import express from 'express';
import router from './routes';
import cors from 'cors';

require('dotenv').config();

class Main {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        this.runServer();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(router);
    }

    runServer() {
        this.server.listen(3333, () => {
            // eslint-disable-next-line no-console
            console.log('Server is Running');
        });
    }
}

export default new Main();
