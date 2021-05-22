import React from 'react'

const Pokemons = (props) => {
  const {trainer, pokemons} = props

  const renderPokemons = () => {
    return pokemons.map (pokemon => {
      return(
        <div>
          <h2>{pokemon.name}</h2>
          <a href={`/trainers/${trainer.id}/pokemons/${pokemon.id}`}>View Pokemon</a>
        </div>
      )
    })
  }
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}`}>Back</a>
      </nav>
      <h1>Pokemons Page</h1>
      <a href={`/trainers/${trainer.id}/pokemons/new`}>Capture Pokemon</a>
      {renderPokemons()}
    </div>
  )
}


export default Pokemons