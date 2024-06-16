import express, { Request, Response } from 'express';
import { ENV } from './configs/index.js';
import { ROUTE } from "./src/routes/apis/index.js";
import { ROUTE as ASSETS } from "./configs/asset.js"
import { ROUTE as VIEW } from "./src/routes/web/index.js"


/**
 * Defualt End point
*/
const APP = express();

/**
 * Asset Config
*/
APP.use(ASSETS)


/**
 * View pages
*/
APP.use(VIEW)


/**
 * Initalize Route
*/
APP.use(ROUTE)

/**
 * Defualt End point
*/
APP.get('/api/*', (request: Request, response: Response) => {
    response.send(
        {
            status: 200,
            method: request.method,
            message: "Hello World!",
            query: request.query,
        }
    );
});


/**
 * Lisenting on port
*/
APP.listen( 3000, () => {
    console.log(`Server is running on port 3000`);
    console.log(`\n♻️  Starting with: [\x1b[35m${ ENV }\x1b[0m\] Mode!`)
    console.log(`🚀 \x1b[30mLocalhost:\x1b[32m http://localhost:3000\x1b[0m`)
    console.log(`🚀 \x1b[30mLocal Service:\x1b[32m http://127.0.0.1:3000\x1b[0m`)
});

export default APP;