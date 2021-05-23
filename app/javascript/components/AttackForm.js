import React from 'react'

const AttackForm = (props) => {
  const {pokemon, attack} = props

  const url = attack ?
  `/pokemons/${pokemon.id}/attacks/${attack.id}` :
  `/pokemons/${pokemon.id}/attacks`

  const defaultMove = attack ? attack.move : ''
  const defaultPower = attack ? attack.power : ''
  return(
    <div>
      <form action={url} method="post">
        {attack && <input type="hidden" name="_method" value="patch"/>}
        <h2>Attack Move</h2>
        <input defaultValue={defaultMove} placeholder="Attack Move" name="attack[move]"/>
        <h2>Attack Power</h2>
        <input defaultValue={defaultPower} placeholder="Power" name="attack[power]"/>
        <button type="submit">{attack ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}

export default AttackForm