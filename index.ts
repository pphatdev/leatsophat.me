import express, { Request, Response } from 'express';
import { ENV } from './configs/index.js';
import { ROUTE } from "./src/routes/apis/index.js";
import { ROUTE as ASSETS } from "./configs/asset.js"
import { ROUTE as VIEW } from "./src/routes/web/index.js"
import { ROUTE as API } from "./src/routes/apis/index.js"
import { info } from './configs/info.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);

// Configure Express to use EJS
ROUTE.set( "views", path.join( __dirname, "./src/views" ) );
ROUTE.set( "view engine", "ejs" );


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
 * View pages
*/
APP.use(API)


/**
 * Initalize Route
*/
APP.use(ROUTE)


/**
 * Lisenting on port
*/
APP.listen( 3000, () => {
    console.log(`\nServer is running on port 3000`);
    console.log(`\nWeb development:`);
    console.log(`♻️  Starting with: [\x1b[35m${ ENV }\x1b[0m\] Mode!`)
    console.log(`🚀 \x1b[30mLocalhost:\x1b[32m http://localhost:3000\x1b[0m`)
    console.log(`🚀 \x1b[30mLocal Service:\x1b[32m http://127.0.0.1:3000\x1b[0m`)
    console.log(`\nAPI development:`);
    console.log(`♻️  Starting with: [\x1b[35m${ ENV }\x1b[0m\] Mode!`)
    console.log(`🚀 \x1b[30mLocalhost:\x1b[32m http://localhost:3000/api/v1/\x1b[0m`)
    console.log(`🚀 \x1b[30mLocal Service:\x1b[32m http://127.0.0.1:3000/api/v1/\x1b[0m`)
});

export default APP;