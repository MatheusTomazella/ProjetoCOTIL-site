const { env } = require('process');
const { app }   = require( './app/app' );
const http      = require( 'http' ).Server( app );
const config    = require( './config/config.json' );

http.listen( config.PORT || env.PORT, ( error ) => {
    if ( error ) throw error;
    console.log( 'Server Running' );
} );