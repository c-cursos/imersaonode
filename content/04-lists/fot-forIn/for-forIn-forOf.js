

const 
   { log, error } = console,
   Service = require( "./service" );


function main() {
   try {
      const res = await Service.getPerson( 'a' );

      // for( let i = 0; i <= res.results.length; i++ ) {
      for( let i in res.results ) {
      }
   } catch (error) {
      log(  );
   }
}

main();