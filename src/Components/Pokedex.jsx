import './Pokedex.css';
import { useState, useEffect } from 'react';
import PokedexHeader from './PokedexHeader';
import PokemonContainer from './PokemonContainer';

export default function Pokedex() {
  const [pokemonUrls, setPokemonUrls] = useState([]);
  const [pocketMonsters, setPocketMonsters] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((json) => setPokemonUrls(json.results));
  }, []);

  useEffect(() => {
    pokemonUrls.forEach((pokemonUrl, index) => {
      fetch(pokemonUrl.url)
        .then((response) => response.json())
        .then((json) =>
          setPocketMonsters((prevPocketMonsters) => {
            // explicity add pokemon at correct index (without this pokemon are loaded in the incorrect order)
            const tmpArray = [...prevPocketMonsters];
            tmpArray[index] = json;
            return tmpArray;
          })
        );
    });
  }, [pokemonUrls]);

  return (
    <div className="pokedex">
      {<PokedexHeader />}
      {/* checks that pocketMonsters is populated with all 151 first gen Pokemon */}
      {pocketMonsters.length >= pokemonUrls.length && (
        <PokemonContainer pocketMonsters={pocketMonsters} />
      )}
    </div>
  );
}
