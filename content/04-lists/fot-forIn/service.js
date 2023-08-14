

const 
   { log, error } = console,
   axios = require( "axios" ),
   URL = "https://swapi.dev/api/people";


async function getPerson( name ) {
   const 
      url = `${URL}/?search=${name}&format=json`,
      response = await axios.get( url );

   return( response.data );
}

getPerson( "r2-d2" )
   .then( res => {
      log( "resultado: ", res );
   } ).catch( err => {
      error( "erro: ", err );
   } );


const 
   print = ( ...args ) => console.log( ...args );

/* == [ exports ] == == == == == == == == == */
module.exports = {
   getPerson,
   print
};
