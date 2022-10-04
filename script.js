import { pokemonArray } from "./data/pokemon.js";

const pokemonDataArray = pokemonArray;

const showPokemon = () => {
  for (let key in pokemonArray) {
    let individualPokemnon = Object.values(pokemonDataArray[key]);
    console.log(individualPokemnon);
    // console.log(Object.values(pokemonDataArray[key].types));
  }
};

showPokemon();
