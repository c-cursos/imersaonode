

// 0 obeter usuario
// 1 preciso obter o numero de telefone do usuario a partir de seu ID 
// 2 obter endereço do usuario pelo ID 

function obterUsuario( callback ) {
   setTimeout( () => {
      return callback( null, {
         id: 1,
         nome: 'Aladin',
         dataDeNascimento: new Date()
      } );
   }, 1000 );
}
  
function obterTelefone( idUsuario, callback ) {
   setTimeout( () =>{
      return callback( null, {
         Telefone: '41984746789',
         DDD: 41
      } );
   }, 2000 );
}
  
function obterEndereco( idUsuario, callback ) {
   setTimeout( () => {
      return callback( null, {
         rua: 'dos bobos',
         numero: 0
      } );
   }, 2000 );
}
  
// function resolverUsuario( error, Usuario ) {
//   console.log( 'Usuario = ', Usuario );
// }
  
obterUsuario( function resolverUsuario( error, Usuario ) {
   if( error ) {
      console.log( 'DEU RUIM em USUARIO', error );
      return;
   }
   obterTelefone( Usuario.id, function resolverTelefone( error1, Telefone ) {
      if( error1 ) {
         console.log( 'DEU RUIM em Telefone', error );
         return;
      }

      obterEndereco( Usuario.id, function resolverEndereco( error2, Endereco ) {
         if( error2 ) {
               console.log( 'DEU RUIM em Endereço', error );
               return;
         }

         console.log(`
         Nome: ${Usuario.nome},
         Endereco: ${Endereco.rua}, ${Endereco.numero}
         Telefone: ( ${Telefone.DDD} )${Telefone.Telefone}
         `);
      } );
   } );
} );