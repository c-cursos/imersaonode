

const 
   Service = require( "./service" ),
   { log, error } = console;

/* == [ custom map ] == == == == == == == == == */
Array.prototype.set = function( callback ) {
   // log( "This.prototype: ", typeof( this ) );
   const 
      newMappedList = [];

   for( let i = 0; i <= this.length - 1; i++ ) {
      const 
         res = callback( this[ i ], i );
         
      newMappedList.push( res );
   }

   return newMappedList;
};


async function main() {
   try {
      const 
         res = await Service.getPerson( "a" ),
         names = [];

      /* forEach ---------------- */
      // res.results.forEach( item => {
      //    return names.push( item.name );
      // } );

      /* map ----------------------- */
      // const mapNames = res.results.map( item => {
      //    return item.name;
      // } );
      // } );

      /* set ----------------------- */
      const mapNames = res.results.set( (item, index ) => {
         return `[${index}]${item.name}`;
      } );

      log( "Names: ", mapNames );
   } catch (error) {
      log( "Error: ", error );
   }
}

main();


