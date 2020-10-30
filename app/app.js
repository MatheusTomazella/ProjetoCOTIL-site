const express   = require( 'express' );
const app       = express( );
const bp        = require( 'body-parser' );
const { stats } = require( './statistics' );

const VIEWS_FOLDER = `${__dirname}/client/html`;

/* Middlewares */

app.use( bp.json() );
app.use( bp.urlencoded( { extended: false } ) );

/* Site Pages */

app.use( express.static( __dirname+'/client' ) );

/* Routes */

app.get( '/', ( request, response ) => {
    response.sendFile( VIEWS_FOLDER+'/index.html' );
    //stats.checkUserCount( request );
} )

/* Export App */
module.exports = {
    app
}