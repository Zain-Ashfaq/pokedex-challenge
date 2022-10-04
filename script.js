import { pokemonArray } from "./data/pokemon.js";

const pokemonDataArray = pokemonArray;

const cardContainer = document.querySelector(".card-container");

const showPokemon = () => {
  let pokemonCards = "";
  for (let key in pokemonArray) {
    let individualPokemnon = Object.values(pokemonDataArray[key]);

    let card = "<div>";
    card += `<h1>Number: ${individualPokemnon[0]}</h1>`;
    pokemonCards += card;
    // console.log(individualPokemnon);

    // cardContainer.appendChild(newElement);

    // console.dir(cardContainer);

    // showPokemon.appendChild(newPokemon);
  }
  cardContainer.innerHTML += pokemonCards;
};

showPokemon();
