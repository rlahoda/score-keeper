import React, { useState } from 'react';
import CheckKnockoutIcon from './icons/CheckKnockoutIcon';
import XKnockoutIcon from './icons/XKnockoutIcon';
import PencilCircleIcon from './icons/PencilCircleIcon';

export default function NameEntry(props) {
  const {name, updateName} = props;

  const [playerName, setplayerName] =  useState(name)
  const [showForm, setShowForm] = useState(false);

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  function submitName(event) {
    event.preventDefault();
    updateName(name, playerName)
    setShowForm(false)
  }

  if (showForm) {
    return (
      <React.Fragment><form
      className="name-form"
      onSubmit={submitName}
    >
      <input
        type="text"
        className="name-input"
        onChange={handleChange}
        value={playerName}
      />
      <div className='button-container'>
      <button
        type="submit"
        className="button__icon button__icon--submit"> <CheckKnockoutIcon/> </button>
      <button
        type=""
        onClick={() => {setShowForm(false); setplayerName(name) }}
        className="button__icon button__icon--cancel"
      > <XKnockoutIcon/> </button>
      </div>
    </form></React.Fragment>
    )
    
  } else {
    return (
      <React.Fragment>{name} <button className='button__icon button__icon--edit' onClick={() => setShowForm(true)}> <PencilCircleIcon/> </button></React.Fragment>
    )
    
  }

}
