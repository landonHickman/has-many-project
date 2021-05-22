import React from 'react'

const PokemonForm = (props) => {
  const {trainer, pokemon} = props

  const url = pokemon ?
  `/trainers/${trainer.id}/pokemons/${pokemon.id}`:
  `/trainers/${trainer.id}/pokemons`

  const defaultName = pokemon ? pokemon.name : ''
  return(
    <div>
      <form action={url} method="post">
        {pokemon && <input type="hidden" name="_method" value="patch"/>}
        <h3>Name</h3>
        <input defaultValue={defaultName} placeholder="Name" name="pokemon[name]"/>
        <button type="submit">{pokemon ? "Update" : "Capture" }</button>
      </form>
    </div>
  )
}


export default PokemonForm