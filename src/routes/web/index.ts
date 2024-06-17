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
ROUTE.get( "/", ( request, res ) => {
    res.render( "pages/index" , {
        header: info({
            canonical: "//" + request.headers.host
        })
    });
});


/**
 * Not Found page or Defualt End point
*/
// ROUTE.all('*', (request, response) => {
//     const header = info({
//         title: "Not Found",
//         canonical: "//" + request.headers.host
//     })
//     response.status(404)
//     .render( "pages/404" , { header: header });
// });


export default ROUTE;