const axios = require('axios');

const getAllPokemons = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
    const pokemonList = response.data.results;

    const pokemonData = await Promise.all(pokemonList.map(async pokemon => {
      const pokemonInfo = await axios.get(pokemon.url);
      const { name, sprites, types, weight, abilities } = pokemonInfo.data;
      
      return {
        name: name,
        photo: sprites.front_default,
        type: types.map(type => type.type.name),
        weight: weight,
        abilities: abilities.map(ability => ability.ability.name)
      };
    }));

    return pokemonData

  } catch (error) {
    throw error
  } 
}

const getPokemonDetail = async (reqData) => {
  try {
    console.log(reqData);
    const name = reqData.params.name.toLowerCase();
    const pokeDataRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    const { sprites, types, weight, abilities } = pokeDataRes.data;
    
    const pokemonData = {
      photo: sprites.front_default,
      type: types.map(type => type.type.name),
      weight: weight,
      abilities: abilities.map(ability => ability.ability.name)
    };

    return pokemonData

  } catch (error) {
    throw error
  }
}

module.exports = { getAllPokemons, getPokemonDetail }