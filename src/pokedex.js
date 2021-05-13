import { useEffect, useState } from "react";
import PokemonThumnail from "./components/PokemonThumnail";

/**CONSUMO DA API */
function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadmore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  const getAllPokemons = async () => {
  const res = await fetch(loadmore)
  const data = await res.json()

  setLoadMore(data.next)
  
  function createPokemonObject (result) {
    result.forEach( async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
    })
  }
  createPokemonObject(data.results)
}

useEffect(() => {
  getAllPokemons()
}, [])

 /** CHAMADA DOS PARÂMETROS DOS POKEMONS NA API */
  return (
    <div className="app-container">
      <h1>Pokedex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          { allPokemons.map((pokemon, index) => 
            <PokemonThumnail 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            />
          )}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default Pokedex;