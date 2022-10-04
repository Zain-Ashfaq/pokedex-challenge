import { pokemonArray } from "./data/pokemon.js";

const pokemonDataArray = pokemonArray;

const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);
const showPokemon = () => {
  let pokemonCards = "";
  for (let key in pokemonArray) {
    let individualPokemnon = Object.values(pokemonDataArray[key]);
    let pokemonImage = individualPokemnon[3];

    let image = document.createElement("img");
    image.src = pokemonImage;

    let card = cardContainer;
    let h1 = document.createElement("h1");
    // card.appendChild(h1);
    h1.innerText = individualPokemnon[0];
    card.append(h1);

    //  card.appendChild("<h1>");

    // let card = "<div>";
    // card.append(` Number: ${individualPokemnon[0]}`);
    // card.append(` Name: ${individualPokemnon[1]}`);
    // card.append(` Type(s): ${individualPokemnon[2]}`);
    // card.append(` Image: ${individualPokemnon[3]}`);

    // card += `<h1>Number: ${individualPokemnon[0]}</h1>`;
    // card += `<h1>Name: ${individualPokemnon[1]}</h1>`;
    // card += `<h1>Type: ${individualPokemnon[2]}</h1>`;
    // card += `image is ${image.src}`;
    pokemonCards += card;
    // console.log(individualPokemnon);

    // cardContainer.appendChild(newElement);

    // console.dir(cardContainer);

    // showPokemon.appendChild(newPokemon);
  }
  cardContainer.innerHTML += pokemonCards;
};

showPokemon();
