export const createPokemon = (pokemon) => {
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
