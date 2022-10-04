import { pokemonArray } from "./data/pokemon.js";

const pokemonDataArray = pokemonArray;

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
    h2.innerText = `Number: ${individualPokemnon[0]}`;

    h1.innerText = `Name: ${individualPokemnon[1]}`;
    p.innerText = `Type(s): ${individualPokemnon[2]}`;
    image.innerHTML = `Image: ${individualPokemnon[3]}`;
    card.append(h1);
    card.append(h2);
    card.append(p);
    card.append(image);

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
