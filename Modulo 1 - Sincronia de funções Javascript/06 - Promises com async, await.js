

const util = require( "util" );

const obterEnderecoAsync = util.promisify( obterEndereco );
      
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
       
main();

async function main(){
   console.time();
   try {
      const 
         usuario = await obterUsuario(),
         // telefone = await obterTelefone( usuario.id ),
         // endereço = await obterEnderecoAsync( usuario.id );
         PromiseAll = await Promise.all( [
            obterTelefone( usuario.id ),
            obterEnderecoAsync( usuario.id )
         ] ),
         [telefone, endereço] = [ PromiseAll[0], PromiseAll[1] ];
      
      console.timeEnd();
      console.log( `== == == == == == == == ==
      Nome: ${usuario.nome}
      Telefone: ( ${telefone.DDD} ) ${telefone.telefone}
      Endereço: ${endereço.rua}, ${endereço.numero}
== == == == == == == == == ` );
   } catch (error) {
      console.error( "Erro: ", error );
   }
}