import React from 'react'
import AttackForm from './AttackForm'
const AttackEdit = (props) => {
  const {pokemon, attack} = props

  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/pokemons/${pokemon.id}/attacks/${attack.id}`}>Back</a>
      </nav>
      <h1>Update Attack</h1>
      <AttackForm pokemon={pokemon} attack={attack}/>
    </div>
  )
}


export default AttackEdit