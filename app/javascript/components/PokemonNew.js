import React from 'react'
import PokemonForm from './PokemonForm'

const PokemonNew = (props) => {
  const {trainer} = props
  
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}/pokemons`}>Back</a>
      </nav>
      <h1>Capture Pokemon</h1>
      <PokemonForm trainer={trainer}/>
    </div>
  )
}


export default PokemonNew