const baseURL = "https://api.pokemontcg.io/v1";
const pokemonCards = document.querySelector(".pokemon-cards");

let pokemons = [];

const getJSON = async (url) => {
  return await fetch(url).then((response) => response.json());
};

const main = async () => {
  const allPokemonCards = await getJSON(`${baseURL}/cards`);
  pokemons = allPokemonCards.cards;
  renderPokemons();
};

const renderPokemons = () => {
  pokemons.forEach((pokemon) => {
    const pokemonEl = createPokemon(pokemon);
    pokemonCards.appendChild(pokemonEl);
  });
};

const createPokemon = (pokemon) => {
  const pokemonUl = document.createElement("ul");
  pokemonUl.innerHTML = `
    <li class="pokemon-image"><img src="${pokemon.imageUrl}" alt=""></li>
    <li class="name">Name: ${pokemon.name}</li> 
    <li class="nationalPokedexNumber">${pokemon.nationalPokedexNumber}</li>
    <li class="type">${pokemon.types}</li>
    <li class="supertype">${pokemon.supertype}</li>
    <li>${pokemon.subtype}</li>
    <li>${pokemon.hp}</li>
    <li>${pokemon.number}</li>
    <li>${pokemon.rarity}</li>
    <li>${pokemon.series}</li>
    <li>${pokemon.set}</li>
  `;
  return pokemonUl;
};

main();
