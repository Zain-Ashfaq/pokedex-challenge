import { pokemonArray } from "./data/pokemon.js";

const pokemonDataArray = pokemonArray;
let div = document.createElement("div");

const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);
const showPokemon = () => {
  let pokemonCards = "";

  for (let key in pokemonArray) {
    let individualPokemnon = Object.values(pokemonDataArray[key]);

    let card = cardContainer;

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let image = document.createElement("image");
    // card.appendChild(h1);
    div.innerHTML;
    h2.innerText = `Number: ${individualPokemnon[0]}`;

    h1.innerText = `Name: ${individualPokemnon[1]}`;
    p.innerText = `Type(s): ${individualPokemnon[2]}`;
    image.innerHTML = `Image: ${individualPokemnon[3]}`;
    card.append(h1);
    h1.classList.add("card");
    card.append(h2);
    h2.classList.add("card");
    card.append(p);
    p.classList.add("card");
    card.append(image);
    image.classList.add(".card__image");

    pokemonCards += card;
  }
  cardContainer.innerHTML += pokemonCards;
};

showPokemon();
