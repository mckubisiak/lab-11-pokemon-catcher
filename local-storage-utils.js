import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';


export function getPokedex() {

    // this gets the string from local storage
    const stringyPokedex = localStorage.getPokedex('POKEDEX');

    const parsedPokedex = JSON.parse(stringyPokedex);

    if (parsedPokedex) {

        return parsedPokedex;
    }

    else {
        return [];
    }
}

// this sets the cart to localstorage

export function setPokedex(somePokedex) {

    const pokedexString = JSON.stringify(somePokedex);

    localStorage.setPokedex(POKEDEX, pokedexString);
}


// this adds +1 to the quanitiy by looking for the id in the cart already and 
//increasing it by 1; or if there is not matching id it will add the item to 
//cart ARRAY
export function addToPokedex(productId) {
    const pokedex = getPokedex();

    const pokedexMemory = findById(pokedex, productId);

    if (pokedexMemory) {
        pokedexMemory.quantity++;
    }

    else {
        const addPokemon = {
            id: productId,
            quantity: 1,
        };
        pokedex.push(addPokemon);
    }

    setPokedex(pokedex);
}

