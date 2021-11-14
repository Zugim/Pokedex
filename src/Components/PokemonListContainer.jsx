import './PokemonListContainer.css';
import { useState } from 'react';
import PokemonListHeader from './PokemonListHeader';
import PokemonList from './PokemonList';

export default function PokemonListContainer({
  pocketMonsters,
  focusedPokemon,
  handleClick,
  formatPokemonNumber,
}) {
  const [searchedValue, setSearchedValue] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedValue(e.target.value);
  };

  const handleSelection = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="pokemon-list-container">
      <PokemonListHeader
        handleSearch={handleSearch}
        handleSelection={handleSelection}
      />
      <PokemonList
        pocketMonsters={pocketMonsters}
        focusedPokemon={focusedPokemon}
        handleClick={handleClick}
        formatPokemonNumber={formatPokemonNumber}
        searchedValue={searchedValue}
        selectedType={selectedType}
      />
    </div>
  );
}
