

const kItems = Symbol( "kItems" );

class Heroes {
   constructor() {
      this[ kItems ] = [];
   }

   add( firstName, lastName ) {
      this[ kItems ].push( { firstName, lastName } );
   }
}

module.exports = Heroes;
