import React from 'react'

const Trainer = (props) => {
  const {trainer} = props
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/">Back</a>
      </nav>
      <h1>Trainer {trainer.name}</h1>
      <h2>Age: {trainer.age}</h2>
      <a href={`/trainers/${trainer.id}/edit`}>Edit</a>
      <a href={`/trainers/${trainer.id}`} data-method="delete">Delete</a>
      <br/>
      <p></p>
      <a href={`/trainers/${trainer.id}/pokemons`}>View Pokemon</a>
    </div>
  )
}


export default Trainer