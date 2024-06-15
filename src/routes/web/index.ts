import express from 'express';
export const ROUTE = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename    = fileURLToPath(import.meta.url);
const __dirname     = path.dirname(__filename);


// Configure Express to use EJS
ROUTE.set( "views", path.join( __dirname, "./../../views" ) );
ROUTE.set( "view engine", "ejs" );

ROUTE.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" , { getParams: "getParams" });
});

export default ROUTE;