const { 
  getAllPokemons, 
  getPokemonDetail 
} = require('../services/pokemons')

const getList = async (req, res) => {  
  try {
    const pokemonData = await getAllPokemons();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send({ data: pokemonData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getDetail = async (req, res) => {
  try {
    const pokemonData = await getPokemonDetail(req);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send({ data: pokemonData });
  } catch (error) {
    res.status(404).json({ error: 'Pokémon not found' });
  }
}

module.exports = {getList, getDetail}