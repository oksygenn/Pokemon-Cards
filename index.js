import { getJSON } from "./api.js";
import { createPokemon } from "./pokemon-creator.js";
const baseURL = "https://api.pokemontcg.io/v1";
const pokemonCards = document.querySelector(".pokemon-cards");

let pokemons = [];

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

main();
