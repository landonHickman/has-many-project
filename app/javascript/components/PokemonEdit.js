import React from 'react'
import PokemonForm from './PokemonForm'
const PokemonEdit = (props) => {
  const {pokemon, trainer} = props
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}`}>Back</a>
      </nav>
      <h1>Rename {pokemon.name}?</h1>
      <PokemonForm pokemon={pokemon} trainer={trainer}/>
    </div>
  )
}


export default PokemonEdit