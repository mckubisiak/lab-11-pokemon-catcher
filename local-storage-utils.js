import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';
const ALLDATA = 'ALLDATA';

export function getPokedex() {

    const stringyPokedex = localStorage.getItem('POKEDEX');
    
    
    if (!stringyPokedex) return []; 

    
    
    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;

}


export function getAllData() {

    const stringyPokedex = localStorage.getItem('ALLDATA');
    
    
    if (!stringyPokedex) return []; 

    
    
    const parsedPokedex = JSON.parse(stringyPokedex);

    return parsedPokedex;

}

export function setAllData(somePokedex) {

    const pokedexString = JSON.stringify(somePokedex);

    localStorage.setItem(ALLDATA, pokedexString);

}

export function setPokedex(somePokedex) {

    const pokedexString = JSON.stringify(somePokedex);

    localStorage.setItem(POKEDEX, pokedexString);
}


export function addAllEncounter(pokeId) {;
    const alldata = getAllData();

    const pokedexMemory = findById(alldata, pokeId);

    if (pokedexMemory) {
        pokedexMemory.encounters++;
    }

    else {
        const addPokemon = {
            id: pokeId,
            encounters: 1,
            catches:0
        };
        alldata.push(addPokemon);
    }

    setAllData(alldata);
    
}


export function addEncounter(pokeId) {
    const pokedex = getPokedex();
    const alldata = getAllData();

    const pokedexMemory = findById(pokedex, pokeId);

    if (pokedexMemory) {
        pokedexMemory.encounters++;
    }

    else {
        const addPokemon = {
            id: pokeId,
            encounters: 1,
            catches:0
        };
        pokedex.push(addPokemon);
    }

    setPokedex(pokedex);
    
}

export function catchPokemon(caughtPokemonId){
    
    const pokedex = getPokedex();
    const userThrow = findById(pokedex, caughtPokemonId);

    userThrow.catches++;

    setPokedex(pokedex);
}



export function catchAllPokemon(caughtPokemonId){
    
    const alldata = getAllData();
    const userThrow = findById(alldata, caughtPokemonId);

    userThrow.catches++;

    setAllData(alldata);
}

export function getTotalCaptured() {

    let total = 0;
    const pokedex = getPokedex();

    for (let poke of pokedex) {

        total += poke.catches;
    }
    return total;
}


