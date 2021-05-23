import React from 'react'
import AttackForm from './AttackForm'

const AttackNew = (props) => {
  const {pokemon} = props
  return(
    <div>
      <h1>Create an Attack</h1>
      <AttackForm pokemon={pokemon} />
    </div>
  )
}


export default AttackNew