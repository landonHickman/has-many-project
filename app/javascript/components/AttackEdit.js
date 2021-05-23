import React from 'react'
import AttackForm from './AttackForm'
const AttackEdit = (props) => {
  const {pokemon, attack} = props

  return(
    <div>
      <h1>Update Attack</h1>
      <AttackForm pokemon={pokemon} attack={attack}/>
    </div>
  )
}


export default AttackEdit