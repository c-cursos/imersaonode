

const 
   Heroes = require( "./heroes" ),
   heroes = new Heroes();

heroes.add( "Céo", "Sammarco" );
heroes.add( "Lýh", "Gangello" );
heroes.add( "Bê", "Sammarco Gangello" );

console.log( "heroes", heroes );
