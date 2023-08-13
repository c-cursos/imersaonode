

/* == [ lifecycle ] ===========
   Pending: 
      initial state - 'stay in this state while not terminated or rejected'
   
   Fulfilled: 
      post processed - 'after get success'

   Rejected:
      after get error & get rejected


   Promise 
      {
         .then( resolverQuandoTerminar ) return Promise,


         .then( ..., tratarErro ) .catch( tratarErro ) return Promise
      }
 */

const util = require( "util" );

const getAddressAsync = util.promisify( obterEndereco );

function obterUsuario() {
   return new Promise( function resolvePromise( resolv, reject ) {
      setTimeout( () => {
         // return reject(
         //    new Error( "DEU RUIM: reject\n",  )
         // );
         return resolv( {
            id: 1,
            nome: "Aladin",
            dataDeNascimento: new Date()
         } );
      }, 1000 );
   } );
}
        
function obterTelefone( idDoUsuario ) {
   return new Promise( ( resolv, reject ) => {
      setTimeout( () => {
         return resolv( {
            Telefone: "41984746789",
            DDD: 41
         } );
      }, 2000 );
   } );
}
        
function obterEndereco( idDoUsuario, callback ) {
   setTimeout( () => {
      return callback( null, {
         rua: "dos bobos",
         numero: 0
      } );
   }, 2000 );
}
 

const usuarioPromise = obterUsuario();

usuarioPromise
   .then( function( usuario ) {
      return obterTelefone(
         usuario.id
      )
         .then( function( result ) {
            return {
               usuario: {
                  nome: usuario.nome,
                  id: usuario.id
               },
               telefone: result
            };
         } );
   } )
   .then( function( result ) {
      const endereco = getAddressAsync( result.usuario.id );
      return endereco.then( function( nextResult ) {
         return {
            usuario:  result.usuario,
            telefone: result.telefone,
            endereco: nextResult
         };
      } );
   } )
   .then( function( result ) {
      console.log( ` =================
         result:
         Nome: ${ result.usuario.nome }
         Endereço: ${ result.endereco.rua }, ${ result.endereco.numero }
         Telefone: (${ result.telefone.DDD }) - ${ result.telefone.Telefone }
      =================`, result );
   } )
   .catch( function( error ) {
      console.log( "DEU RUIM", error );
   } );