import './PokemonList.css';

export default function PokemonList({
  pocketMonsters,
  focusedPokemon,
  handleClick,
  formatPokemonNumber,
  searchedValue,
  selectedType,
}) {
  const filterCriteria = (pokemon) =>
    pokemon.types.some((t) => t.type.name.includes(selectedType)) &&
    pokemon.name.includes(searchedValue);

  return (
    <div className="pokemon-list">
      {pocketMonsters.filter(filterCriteria).map((pokemon, index) => (
        <div
          key={index}
          className={
            pokemon.name === focusedPokemon.name
              ? 'pokemon-list-item focused-pokemon'
              : 'pokemon-list-item'
          }
          onClick={() => handleClick(pokemon.id - 1)}
        >
          <h3>{pokemon.name}</h3>
          <p className="italic">{formatPokemonNumber(pokemon.id)}</p>
        </div>
      ))}
    </div>
  );
}
