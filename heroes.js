

const 
   kItems = Symbol( "kItems" ),
   kFormatName = Symbol( "kFormatName" );

class Heroes {
   constructor() {
      this[ kItems ] = [];
   }

   add( firstName, lastName ) {
      this[ kItems ].push( { firstName, lastName } );
   }

   oi() {
      console.log( "oi" );
   }

   [kFormatName]( first, last ) {
      return `${first} ${last}`;
   }

   toString() {
      const result = this[kItems]
         .map( item => this[kFormatName]( item.firstName, item.lastName ) )
         .join( "\n" );

      return '\n'.concat( result );
   }

   [Symbol.toPrimitive]( coercionType ) {
      if( coercionType !== 'string' ) throw new TypeError( 'invalid coercion!' );

      return this.toString();
   }

   * [Symbol.iterator]() {
      for( const item of this[kItems] ) {
         yield item;
      }
   }
}







module.exports = Heroes;
 