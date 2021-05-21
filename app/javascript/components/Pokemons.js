import React from 'react'

const Pokemons = (props) => {
  const {trainers, pokemons} = props

  const renderPokemons = () => {
    return pokemons.map (pokemon => {
      return(
        <div>
          <h2>{pokemon.name}</h2>
        </div>
      )
    })
  }
  return(
    <div>
      <h1>Pokemons Page</h1>
      {renderPokemons()}
    </div>
  )
}


export default Pokemons