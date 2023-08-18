

const 
   { getPerson, print } = require( "./service" ),
   ceo = require( "lyhstack" )
;

Array.prototype.filtro = function( callback ) {
   const 
      list = [];

   for( index in this ) {
      const 
         item = this[index],
         res = callback( item, index, this )
      ;

      if( !res ) continue;

      list.push( item );
   }
}; 

async function main() {
   try {
      const 
         { results } = await getPerson( "a" ),
         familiaLars = results.filter( item => {
            let 
               res = item.name.toLowerCase().indexOf( "lars" ) !== -1;

            return res;
         } ),
         names = familiaLars.map( person => person.name ),
         lars = results.filtro( item => 
            item.name.toLowerCase().indexOf( "lars" ) !== -1 )
      ;

      print( names );
         
   } catch(error) {
      print( "erro:", error );
   }
}

main();