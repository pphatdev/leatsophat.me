import express from 'express';
export const ROUTE = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { info, type Info } from '../../../configs/info.js';
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);


// Configure Express to use EJS
ROUTE.set( "views", path.join( __dirname, "./../../views" ) );
ROUTE.set( "view engine", "ejs" );


// Home page
ROUTE.get( "/", ( req, res ) => {
    res.render( "pages/index" , {
        header: info,
        footer: {

        }
    });
});


/**
 * Defualt End point
*/
ROUTE.get('*', (request, response) => {
    response.render( "pages/404" , {
        header: info,
        footer: {

        }
    });
});

export default ROUTE;