import { getJSON } from "./api.js";
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

const createPokemon = (pokemon) => {
  const pokemonLi = document.createElement("li");
  pokemonLi.className = "pokemon";
  pokemonLi.innerHTML = `
    <div class="pokemon-wrapper">
      <img class="pokemon-image" src="${pokemon.imageUrl}" alt="">
      <div class="details">
      <h3>Name: ${pokemon.name}</h3>
        <p class="supertype">Supertype: ${pokemon.supertype}</p>
        <p>HP: ${pokemon.hp || 0}</p>
        <p>Subtype: ${pokemon.subtype}</p>
        <p>Number: ${pokemon.number}</p>
        <p>Rarity: ${pokemon.rarity}</p>
        <p>Series: ${pokemon.series}</p>
        <p>Set: ${pokemon.set}</p>
      </div>
    </div>
   
  `;
  return pokemonLi;
};

main();
