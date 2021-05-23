import React from 'react'

const Trainer = (props) => {
  const {trainer, pokemon} = props
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/">Back</a>
      </nav>
      <h1>Trainer {trainer.name}</h1>
      <h2>Age: {trainer.age}</h2>
      <a href={`/trainers/${trainer.id}/edit`}>Edit Trainer Profile</a>
      <a href={`/trainers/${trainer.id}`} data-method="delete">Euthanize {trainer.name}</a>
      <br/>
      {/* <h3>Pokemon</h3>
      <h4>{pokemons.name}</h4> */}
      <p></p>
      <a href={`/trainers/${trainer.id}/pokemons`}>View {trainer.name}'s Pokemon</a>
    </div>
  )
}


export default Trainer