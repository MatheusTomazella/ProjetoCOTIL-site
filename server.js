require('dotenv').config();
const process   = require( 'process' );
const { app }   = require( './app/app' );
const http      = require( 'http' ).Server( app );
const config    = require( './config/config.json' );

http.listen( process.env.PORT || config.PORT, ( error ) => {
    if ( error ) throw error;
    console.log( 'Server Running' );
} );