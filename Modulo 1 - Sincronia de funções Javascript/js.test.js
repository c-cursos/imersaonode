

function getUser( callback ) {
   setTimeout( () => {
      return callback( null, {
         id: 1,
         name: "Usuário",
      } );
   }, 2000);
}

function getUserEmail( userId, callback ) {
   setTimeout( () => {
      return callback( null, {
         email: 'email@cmail.com'
      } );
   }, 2000);
}
function getUserPhone( userId, callback ) {
   setTimeout( () => {
      return callback( null, {
         phone: '9 9148-6078',
         ddd: '13'
      } );
   }, 2000);
}

getUser( ( error, user ) => {
   let User = {
      id: '', name: '', email: '', phone: '', ddd: ''
   };

   if( error ) {
      console.log( 'DEU RUIM', error );
      return;
   }
   getUserEmail( user.id, ( errorEmail, email ) => {
      if( errorEmail ) {
         console.log( 'DEU RUIM EM EMAIL', errorEmail );
         return;
      }
      getUserPhone( user.id, ( errorPhone, phone ) => {
         if( errorPhone ) {
            console.log( 'DEU RUIM EM PHONE', errorPhone );
            return;
         }

         User.id = user.id;
         User.name = user.name;
         User.email = email.email;
         User.phone = phone.phone;
         User.ddd = phone.ddd;

         // return ( User );
         console.log( 'User:', User );
      } );
   } );
} );