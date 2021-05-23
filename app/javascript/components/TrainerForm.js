import React from 'react'

// this form is used to choose between edit and new
const TrainerForm = (props) => {
  const {trainer} = props
// uses ternary to choose between the routes for edit and new
  const url = trainer ?
  `/trainers/${trainer.id}` :
  `/trainers`
// fills in input if its an edit since we pass in trainer for edit but not for new.
  const defaultName = trainer ? trainer.name : ''
  const defaultAge = trainer ? trainer.age : ''
  return(
    <div>
      {/* */}
      <form action={url} method="post">
        {/* if trainer is true then returns the input. if false it doesnt. */}
        {trainer && <input type="hidden" name="_method" value="patch"/>}
        <p>Name</p>
        <input defaultValue={defaultName} placeholder="name" name="trainer[name]"/>
        <p>Age</p>
        <input defaultValue={defaultAge} placeholder="Age" name="trainer[age]" type="integer"/>
        <button type="submit">{trainer ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}


export default TrainerForm