// import functions and grab DOM elements
import pokeData from './pokemon.js';
import { addEncounter, catchPokemon, getTotalCaptured } from './local-storage-utils.js';

// initialize state

const button = document.querySelector(`#catch-button`);
const radio1 = document.querySelector(`#currentPokemon1`);
const radio2 = document.querySelector(`#currentPokemon2`);
const radio3 = document.querySelector(`#currentPokemon3`);
const img1 = document.querySelector(`#poke-img1`);
const img2 = document.querySelector(`#poke-img2`);
const img3 = document.querySelector(`#poke-img3`);


renderPokemon();

// set event listeners

button.addEventListener('click', () => {

    const selectedPokemon = document.querySelector(':checked');

    const selectedPokeId = selectedPokemon.value;
    
  // console.log (selectedPokemon);
  // console.log (typeof selectedPokemon);
  // console.log (selectedPokeId);
  // console.log (typeof selectedPokeId);

    catchPokemon(Number(selectedPokeId));

    const totalCaptured = getTotalCaptured();

    // console.log(totalCaptured);

    if (totalCaptured >= 10) {

        window.location.replace('/Results');

    } else {

        renderPokemon();

    }

});


function getRandomPokemon() {

    const randomPokemonId = Math.floor(Math.random() * pokeData.length);

    const randomPokemon = pokeData[randomPokemonId];

    return randomPokemon;

    

}


function renderPokemon() {

    let currentEncounter1 = getRandomPokemon();
    let currentEncounter2 = getRandomPokemon();
    let currentEncounter3 = getRandomPokemon();


    while (currentEncounter1.id === currentEncounter2.id 
      || currentEncounter1.id === currentEncounter3.id 
      || currentEncounter2.id === currentEncounter3.id){

        currentEncounter1 = getRandomPokemon();
        currentEncounter2 = getRandomPokemon();
        currentEncounter3 = getRandomPokemon();
    }

    addEncounter(currentEncounter1.id);
    addEncounter(currentEncounter2.id);
    addEncounter(currentEncounter3.id);

    radio1.value = currentEncounter1.id;
    radio2.value = currentEncounter2.id;
    radio3.value = currentEncounter3.id;

    img1.src = currentEncounter1.url_image;
    img2.src = currentEncounter2.url_image;
    img3.src = currentEncounter3.url_image;
}



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
