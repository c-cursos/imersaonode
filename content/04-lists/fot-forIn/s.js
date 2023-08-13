const axios = require("axios");
const URL = "https://swapi.co/api/people";
const {log, error} = console;

async function obterPessoas(nome) {
   const url = `${URL}/?search=${nome}&format=json`;
   const response = await axios.get(url);
   return response.data;
}

obterPessoas( "r2" )
   .then( function (res) {
      console.log( "resultado: ", res );
   } ).catch( function (err) {
      console.error( "erro: ", err );
   } );