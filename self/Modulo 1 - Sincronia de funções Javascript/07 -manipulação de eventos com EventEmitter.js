

const 
   EventEmitter = require( "events" ),
   { log, error, time, timeEnd } = require("console");


class Emitter extends EventEmitter {}

const 
   Emissor = new Emitter();


let 
   Evento = "user click";


Emissor.on( Evento, click => {
   log( "User: ", click );
} );


let 
   Stdin = process.openStdin();

// Stdin.addListener( "data", value => {
//    log( `User has passed: ${value}` );
// } );

/* capture user input */
function main() {
   return new Promise( ( resolve, reject ) => {
      Stdin.addListener( "data", value => {
         return resolve( value );
      } );
   } );
}

main().then( resultado => {
   log( "resultado\n", resultado.toString() );
} );