import React from 'react'

const Attacks = (props) => {
  const {pokemon, attacks} = props 
  
  const renderAttacks = () => {
    return attacks.map (attack => {
      return (
        <div>
          <h2> {attack.move}</h2>
          <h3>Power: {attack.power}</h3>
          <a href={`/pokemons/${pokemon.id}/attacks/${attack.id}`}>View</a>
        </div>

      )
    })
  }
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${pokemon.trainer_id}/pokemons/${pokemon.id}`}>Back</a>
      </nav>
      <h1>{pokemon.name}'s Attacks</h1>
      <a href={`/pokemons/${pokemon.id}/attacks/new`}>Create an Attack</a>
      {renderAttacks()}
    </div>
  )
}


export default Attacks