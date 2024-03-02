import React, { useState } from 'react';
import './App.css';

const players = [
  { id: 1, name: 'Player 1', country: 'Country 1', votes: 0, imageUrl: '"C:\Users\Dell Exclusive\Desktop\Projects\cricket-voting-app\images\virat kholi (2).jpeg"' },
  { id: 2, name: 'Player 2', country: 'Country 2', votes: 0, imageUrl: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Player 3', country: 'Country 3', votes: 0, imageUrl: 'https://via.placeholder.com/100' },
];


function App() {
  const [playerVotes, setPlayerVotes] = useState(players);

  const votePlayer = (id) => {
    const newVotes = playerVotes.map(player => {
      if (player.id === id) {
        return { ...player, votes: player.votes + 1 };
      }
      return player;
    });
    setPlayerVotes(newVotes);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Cricket Player</h1>
      <div className="players-container">
        {playerVotes.map((player) => (
          <div key={player.id} className="player">
            <h2>{player.name}</h2>
            <p>{player.country}</p>
            {/* Placeholder for player image */}
            <div className="vote-count">Votes: {player.votes}</div>
            <button onClick={() => votePlayer(player.id)}>Vote</button>
          </div>
        ))}
      </div>
    </div>
  );
}



export default App;

