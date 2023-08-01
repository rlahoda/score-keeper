import React, { useState } from 'react';
import CheckKnockoutIcon from './icons/CheckKnockoutIcon';
import XKnockoutIcon from './icons/XKnockoutIcon';
import PencilCircleIcon from './icons/PencilCircleIcon';

export default function ScoreEntry(props) {
  const {score, updateScore, scoreIndex, playerIndex, showEdit} = props;

  const [playerScore, setplayerScore] =  useState(score)
  const [showForm, setShowForm] = useState(showEdit);

  function handleChange(event) {
    setplayerScore(event.target.value);
  }

  function submitScore(event) {
    event.preventDefault();
    updateScore(playerScore, playerIndex, scoreIndex)
    setShowForm(false)
  }

    if (showForm) {
      return (
        <React.Fragment><form
        className="score-form"
        onSubmit={submitScore}
      >
        <input
          type="text"
          className="score-input"
          onChange={handleChange}
          value={playerScore}
        />
        <div className='button-container'>
        <button
          type="submit"
          className="button__icon button__icon--submit"> <CheckKnockoutIcon/> </button>
        <button
          type=""
          onClick={() => {setShowForm(false); setplayerScore(score) }}
          className="button__icon button__icon--cancel"
        > <XKnockoutIcon/> </button>
        </div>
      </form></React.Fragment>
      )
      
    } else {
      return (
        <React.Fragment>{score} <button className='button__icon button__icon--edit' onClick={() => setShowForm(true)}> <PencilCircleIcon/> </button></React.Fragment>
      )
      
    }
  
  }