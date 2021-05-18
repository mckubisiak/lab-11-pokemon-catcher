import { findById } from './utils.js';
import pokemon from './pokemon.js';

export function mungeCaptured(pokemonArray) {

    const results = [];

    for (let poke of pokemonArray) {

        results.push(poke.catches);
    }

    return (results);
}

export function mungeNames(pokemonArray) {

    const results = [];  

    for (let poke of pokemonArray) {

        const data = findById(pokemon, poke.id);
        
        results.push(data.pokemon);
    }

    return results;
} 

export function mungeEncounters(pokemonArray) {

    const results = [];

    for (let poke of pokemonArray) {

        results.push(poke.encounters);
    }

    return (results);
}
