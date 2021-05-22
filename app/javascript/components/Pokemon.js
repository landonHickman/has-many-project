import React from 'react'

const Pokemon = (props) => {
  const {trainer, pokemon} = props

  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}/pokemons`}>Back</a>
      </nav>
      <h1>{pokemon.name}'s Page</h1>
      <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}/edit`}>Rename</a>
      <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}`} data-method="delete">Pokemon Meat Processor</a>
    </div>
  )
}


export default Pokemon