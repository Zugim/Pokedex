import './PokemonContainer.css';
import { useState } from 'react';
import PokemonDetails from './PokemonDetails';
import PokemonListContainer from './PokemonListContainer';

export default function PokemonContainer({ pocketMonsters }) {
  // state
  const [focusedPokemon, setFocusedPokemon] = useState(pocketMonsters[0]);

  // variables
  const types = {
    bug: '#92bd2d',
    dark: '#595761',
    dragon: '#0c6ac8',
    electric: '#f2d94e',
    fairy: '#ef90e6',
    fighting: '#d3425f',
    fire: '#fba64c',
    flying: '#a1bbec',
    ghost: '#5f6dbc',
    grass: '#60be58',
    ground: '#da7c4d',
    ice: '#76d1c1',
    normal: '#a0a29f',
    poison: '#b763cf',
    psychic: '#fa8582',
    rock: '#c9bc8a',
    steel: '#5795a3',
    water: '#539ddf',
  };

  const maxStats = {
    hp: 250,
    attack: 134,
    defense: 180,
    specialAttack: 154,
    specialDefense: 125,
    speed: 150,
  };

  // functions
  const handleClick = (pokemonId) =>
    setFocusedPokemon(pocketMonsters[pokemonId]);

  const formatPokemonNumber = (number) => {
    if (number < 10) return '#00' + number;
    else if (number < 99) return '#0' + number;
    else return '#' + number;
  };

  return (
    <div className="pokemon-container">
      {/* checks that focusedPokemon isn't null */}
      {focusedPokemon && (
        <PokemonDetails
          focusedPokemon={focusedPokemon}
          types={types}
          maxStats={maxStats}
          formatPokemonNumber={formatPokemonNumber}
        />
      )}
      {focusedPokemon && (
        <PokemonListContainer
          pocketMonsters={pocketMonsters}
          focusedPokemon={focusedPokemon}
          handleClick={handleClick}
          formatPokemonNumber={formatPokemonNumber}
        />
      )}
    </div>
  );
}
