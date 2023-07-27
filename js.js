

function GetUser( call ) {
   setTimeout(() => {
      return( call( null, {
         id: 1,
         name: "Anselmo"
      } ) );
   }, 2000 );
}

function GetUserEmail( userId, call ) {
   setTimeout(() => {
      return( call( null, {
         email: "email@cmail.com"
      } ) );
   }, 2000 );
}

function GetUserPhone( userId, call ) {
   setTimeout(() => {
      return( call( null, {
         phone: "9 9148-6078",
         ddd: "13"
      } ) );
   }, 2000 );
}

GetUser( ( error, user ) => {
   let User = {
      id: 0,
      name: "",
      email: "",
      phone: ""
   };

   if( error ) {
      return( console.log( "USER ERROR", error ) ); 
   }

   GetUserEmail( user.id, ( errorEmail, email ) => {
      if( errorEmail ) {
         return( console.log( "EMAIL ERROR", errorEmail ) );
      }

      GetUserPhone( user.id, ( errorPhone, phone ) => {
         if( errorPhone ) {
            return( console.log( "PHONE ERROR", errorPhone ) );
         }

         User.id = user.id;
         User.name = user.name;
         User.email = email.email;
         User.phone = `( ${phone.ddd} ) ${phone.phone}`;

         console.log( "User:", User );
         return User;
      } );
   } );
} );