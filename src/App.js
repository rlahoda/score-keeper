import { useState } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import ScorePage from './components/ScorePage';

function App() {

  const [playerInfo, setplayerInfo] = useState({
    data: {
      rounds: 5,
    },
    stats: [
      {
        name: 'Rob',
        scores: [1,4,75,2,467]
      },
      {
        name: 'Kristy',
        scores: [1,4,75,29,467]
      },
      {
        name: 'Evie',
        scores: [1,4,5,2,467]
      },
      {
        name: 'RJ',
        scores: [1,478,75,2,467]
      },
      {
        name: 'Sam',
        scores: [1,42,75,2,467]
      },
    ]
  });

  function updateName(oldName, newName) {
    const updatedPlayerInfo = {...playerInfo}
    
    for (const player of updatedPlayerInfo.stats) {
      if (player.name === oldName) {
        player.name = newName;
      }
    }
    setplayerInfo(updatedPlayerInfo);
  }

  function updateScore(score, playerIndex, scoreIndex) {
    const updatedPlayerInfo = {...playerInfo}
    
    updatedPlayerInfo.stats[playerIndex].scores[scoreIndex] = score;
       
    setplayerInfo(updatedPlayerInfo);
  }

  function addRound() {
    console.log("addRound");
    const updatedPlayerInfo = {...playerInfo}
    
    updatedPlayerInfo.data.rounds++;

    for (const player of updatedPlayerInfo.stats) {
     player.scores.push(0);
    }
    console.log(updatedPlayerInfo);
    setplayerInfo(updatedPlayerInfo);
  }

  function deleteRound(roundNumber) {
    const updatedPlayerInfo = {...playerInfo}
    
    for (const player of updatedPlayerInfo.stats) {
      player.scores.splice(roundNumber, 1)
    }
    setplayerInfo(updatedPlayerInfo);
  }

  console.log(playerInfo);
  return (
    <div className="App">
      <header className="">
        <h1>Score Keeper</h1>
      </header>
      <div className='main'>
       <StartPage playerInfo={playerInfo} setplayerInfo={setplayerInfo} updateName={updateName}/>
       <ScorePage playerInfo={playerInfo} setplayerInfo={setplayerInfo} updateName={updateName} updateScore={updateScore} addRound={addRound} deleteRound={deleteRound} />
      </div>
    </div>
  );
}

export default App;
