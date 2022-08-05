const fetch = require('node-fetch');

exports.handler = async function () {
  const POKE_API = 'http://pokeapi.co/api/v2/pokedex/kanto';

  const response = await fetch(POKE_API);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data,
    }),
  };
};
