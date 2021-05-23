import React from 'react'

const Attack = (props) => {
  const {pokemon, attack} = props


  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/pokemons/${pokemon.id}/attacks`}>Back</a>
      </nav>
      <h1>{pokemon.name}'s Attaks</h1>
      <h2>{attack.move}</h2>
      <h3>Power: {attack.power}</h3>
      <a href={`/pokemons/${pokemon.id}/attacks/${attack.id}/edit`}>Edit</a>
      <a href={`/pokemons/${pokemon.id}/attacks/${attack.id}`} data-method="delete">Remove</a>
    </div>
  )
}


export default Attack