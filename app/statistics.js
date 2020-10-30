const cookie = require( 'cookie' );
const fs     = require( 'fs' );

class Statistics {
    constructor ( ) {
        this.stats = {
            userCount: 0
        }
        this.file = './stats/stats.json'
        return this;
    }
    saveStats ( ) {
        console.log( 'Saving . . .' );
        fs.writeFile( this.file, JSON.stringify( this.stats ), ( error ) => {
            console.log( error )
            this.loadStats();
        } );
    }
    loadStats ( ) {
        console.log( 'Fetching . . .' );
        fs.readFile( this.file, ( error, result ) => {
            if ( error ) console.log( 'Erro: '+error )
            else console.log( JSON.parse( result ) )
        } );
    }
    checkUserCount ( request ) {
        const cookies = cookie.parse( request.headers.cookie || '' );
        if ( !cookies[ 'notNewUser' ] ) this.stats.userCount++
        this.saveStats();
    }
}

module.exports = {
    stats: new Statistics()
}