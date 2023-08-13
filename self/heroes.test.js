

const 
   { deepStrictEqual, throws } = require( "assert" );
const { log } = require("console");
   
( async () => {
   const
      Heroes = require( "./heroes" ),
      heroes = new Heroes();
   
   heroes.add( "Céo", "Sammarco" );
   heroes.add( "Lýh", "Gangello" );
   heroes.add( "Bê", "Sammarco Gangello" );
   
   // console.log( "heroes", heroes );
   
   // heroes.oi();

   deepStrictEqual( heroes.toString(), '\nCéo Sammarco\nLýh Gangello\nBê Sammarco Gangello' );
   
   // console.log( 'heroes.toString():', heroes.toString() );
   deepStrictEqual( String( heroes ), '\nCéo Sammarco\nLýh Gangello\nBê Sammarco Gangello' );

   // throws( () => heroes * 1, { name: 'TypeError', message: 'invalid convertion!' } );
   // log( heroes * 1 );
} )();

/*
https://www.youtube.com/watch?v=xMyL5HokeyM&embeds_referring_euri=https%3A%2F%2Fdiscord.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo

https://hotmart.com/pt-br/marketplace/produtos/emergente-de-mamae/P80718128J

*/
hoifs oihf oihfoih
