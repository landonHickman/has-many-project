import React from 'react'

const Pokemon = (props) => {
  const {trainer, pokemon} = props

  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}/pokemons`}>Back</a>
      </nav>
      <h1>{pokemon.name}</h1>
      <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}/edit`}>Rename</a>
      <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}`} data-method="delete">Euthanize {pokemon.name}</a>
      <br/>
      <p></p>
      <a href={`/pokemons/${pokemon.id}/attacks/`}>{pokemon.name}'s Attacks</a>
    </div>
  )
}


export default Pokemon