

const 
   { log, error } = console,
   Service = require( "./service" );


async function main() {
   const 
      names = [];

   try {
      const res = await Service.getPerson( "a" );

      /* for --------------------------------------------- */
      // for( let i = 0; i <= res.results.length - 1; i++ ) {
      //    names.push( res.results[i].name );
      // }
      /* --------------------------------------------- for */

      /* forIn --------------------------------------------- */
      // for( let i in res.results ) {
      //    names.push( res.results[i].name );
      // }
      /* --------------------------------------------- forIn */

      /* forOf --------------------------------------------- */
      for( let i of res.results ) {
         names.push( i.name );
      }
      /* --------------------------------------------- forOf */

      log( "names: ", names );
   } catch (error) {
      log(  );
   }
}

main();