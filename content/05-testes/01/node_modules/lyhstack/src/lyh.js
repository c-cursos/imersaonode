const fs = require( "fs" );


const lyh = Object.freeze( [
	print = function( l, y, h ) {
		h ? console.log( l, y, h ) : !h && y ? console.log( l, y ) : console.log( l );
	},
	log = function( l ) {
		console.table( l );
	},
	inverso = function( v ) {
		return v.split( "" ).reverse().join( "" );
	},
	range = function( start, stop, step ) {
		if( typeof stop == "undefined" ) {
			stop = start;
			start = 0;
		}
        
		if( typeof step == "undefined" ) {
			step = 1;
		}
        
		if( ( step > 0 && start >= stop ) || ( step < 0 && start <= stop ) ) {
			return [];
		}
        
		let result = [];
		for( let i = start; step > 0 ? i < stop : i > stop; i += step ) {
			result.push( i );
		}

		return result;
	},
	save = ( l, y ) => {
		let h = JSON.stringify( y );
		fs.writeFileSync( l, h );
	},
	append = ( l, y ) => {
		let h = JSON.stringify( y );
		fs.appendFileSync( l, h );
	},
] );

Object.defineProperty( String.prototype, "inverse", {
	value: function() {
		return this.split( "" ).reverse().join( "" );
	}, enumerable: false
} );

Object.defineProperty( String.prototype, "capitalize", {
	value: function() {
		return this.charAt( 0 ).toUpperCase() + this.slice( 1 );
	}, enumerable: false
} );

















/* [ exports ] 
=================================== */
module.exports = lyh;







/* [ notations ] */
/* 
    using require and commonjs in es6 projects:

    import and create the require
    import { createRequire } from "module";
    const require = createRequire(import.meta.url);

    using require to import from .cjs files
    let ceo = require( "./ceo.cjs" );
*/