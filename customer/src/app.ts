import express, {json} from 'express';
import { Router } from 'express';

export class App {
    private server: express.Application


    constructor() {
        this.server = express()
        this.server.use(json())
        const router = Router();
        this.server.use(router);
    }

    public getServer(): express.Application {
        return this.server
    }
}