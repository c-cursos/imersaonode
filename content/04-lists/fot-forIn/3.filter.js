

const 
   { getPerson, print } = require( "./service" );

async function main() {
   try {
      const 
         { results } = await getPerson( "a" ),
         familiaLars = results.filter( item => {
            let 
               res = item.name.toLowerCase().indexOf( "lars" ) !== -1;

            return res;
         } ),
         names = familiaLars.map( person => person.name );

      print( names );
         
   } catch(error) {
      print( "erro:", error );
   }
}

main();