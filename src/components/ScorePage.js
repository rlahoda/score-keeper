import React, { useState } from 'react';
import NameEntry from './NameEntry';
import ScoreEntry from './ScoreEntry';
import PlusKnockoutIcon from './icons/PlusKnockoutIcon';

export default function ScorePage(props) {
  const { playerInfo, setplayerInfo, updateName, updateScore, addRound, deleteRound } = props;
  const playerStats = playerInfo.stats
  const rounds = playerInfo.data.rounds;


  function displayHeader() {
    let contents = [];
    for (let i = 0; i <= rounds; i++) {
      if (i === rounds) {
        contents.push(<div className='cell cell--last cell--header'> <button
        type=""
        onClick={() => {addRound();}}
        className="button__icon button__icon--plus"
      > <PlusKnockoutIcon/> </button></div>);
      } else {
        contents.push(<div className='cell'>Round {i + 1}</div>);
      }
    }
    return <React.Fragment><div className='cell cell--first cell--header'></div><div className='cell cell--header'>Totals</div>{contents}</React.Fragment>;
  }

  function displayPlayers() {
    let contents = [];
    for (let i = 0; i < playerStats.length; i++) {
      const info = playerStats[i];
      const name = info.name;
      let total = 0;
      const scores = info.scores.map((points, index) => {
        total = total + parseInt(points);
        if (index === info.scores.length - 1) {
          return <div key={index} className='cell cell--last'>
              <ScoreEntry key={index} score={points} updateScore={updateScore} scoreIndex={index} playerIndex={i} showEdit={true} />
            </div>;
        } else {
          return <div key={index} className='cell'>
              <ScoreEntry key={index} score={points} updateScore={updateScore} scoreIndex={index} playerIndex={i} showEdit={false}/>
            </div>;
        }
      })

      contents.push(<React.Fragment><div className='cell cell--first'><NameEntry setplayerInfo={setplayerInfo} name={name} updateName={updateName} /></div><div className='cell cell--total'>{total}</div>{scores}</React.Fragment>);
    }
    return contents;
  }

  return (
    <div className='score-grid'>
      {displayHeader()}
      {displayPlayers()}
    </div>
  )
}
