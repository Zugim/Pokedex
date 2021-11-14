import './PokemonDetails.css';

export default function PokemonDetails({
  focusedPokemon,
  types,
  maxStats,
  formatPokemonNumber,
}) {
  const statNames = focusedPokemon.stats.map((s, index) => {
    if (s.stat.name === 'special-attack') return 'specialAttack';
    else if (s.stat.name === 'special-defense') return 'specialAttack';
    else return s.stat.name;
  });

  return (
    <div className="pokemon-details">
      <p className="pokemon-number italic">
        {formatPokemonNumber(focusedPokemon.id)}
      </p>
      <img
        className="pokemon-img"
        src={focusedPokemon.sprites.other['official-artwork'].front_default}
        alt={focusedPokemon.name}
      />
      <h2 className="pokemon-name">{focusedPokemon.name}</h2>
      <div className="pokemon-type-list">
        {focusedPokemon.types.map((t, index) => (
          <div
            key={index}
            className="pokemon-type"
            style={{ backgroundColor: types[t.type.name] }}
          >
            {t.type.name}
          </div>
        ))}
      </div>
      {focusedPokemon.stats.map((s, index) => (
        <div key={index} className="outer-stat-bar italic">
          {s.stat.name} ({s.base_stat})
          <div
            className="inner-stat-bar"
            style={{
              width: (s.base_stat / maxStats[statNames[index]]) * 100 + '%',
            }}
          ></div>
        </div>
      ))}
      <p className="pokemon-desc">{focusedPokemon.desc}</p>
    </div>
  );
}
