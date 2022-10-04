import { pokemonArray } from "./data/pokemon.js";
const body = document.body;
const div = document.createElement("div");
div.innerText = "Hello world";
body.append(div);

const pokemonDataArray = pokemonArray;
const main = document.body.main;

const cardContainer = document.querySelector(".card-container");
const h1 = document.createElement("div");

const showPokemon = () => {
  let pokemonCards = "";
  for (let key in pokemonArray) {
    let individualPokemnon = Object.values(pokemonDataArray[key]);
    let pokemonImage = individualPokemnon[3];

    let image = document.createElement("img");
    image.src = pokemonImage;

    // let card = cardContainer;

    // let card = "<div>";
    let card = "<div>";

    card += `<h1>Number: ${individualPokemnon[0]}</h1>`;
    card += `<h1>Name: ${individualPokemnon[1]}</h1>`;
    card += `<h1>Type: ${individualPokemnon[2]}</h1>`;
    card += `image is ${image.src}`;
    pokemonCards += card;
    // console.log(individualPokemnon);

    // cardContainer.appendChild(newElement);

    // console.dir(cardContainer);

    // showPokemon.appendChild(newPokemon);
  }
  cardContainer.innerHTML += pokemonCards;
};

showPokemon();
