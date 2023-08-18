


/* 	inverse = function( v ) {
		return v.split( "" ).reverse().join( "" );
	} */

Object.defineProperty( String.prototype, "invers", {
	value: function() {
		return this.split( "" ).reverse().join( "" );
	}, enumerable: false
} );
/* 
console.log(
	"Oi".inverse()
); */