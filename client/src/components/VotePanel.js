import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import '../style/VotePanelStyle.css';

const VotePanel = () => {
  const { players } = useContext(GameContext);

  let livePlayers = [];
  players.forEach((item) => {
    if (item.alive) {
      livePlayers.push(item);
    }
  });

  return (
    <div className="VotePanel">
      <div className="titleBar">
        <h2 className="nameTitle">Name</h2>
        <h2 className="voteTitle">Votes</h2>
      </div>
      <div className="nameList">
        {livePlayers.map((player) => (
          <div className="voteListItem">
            <div className="nameLabel">
              <h3>{player.name}</h3>
            </div>
            <div className="votesLabel">
              <h3>{player.currentVotes}</h3>
            </div>
            <input
              type="radio"
              id={'radio' + player.name}
              name="votee"
              value={player.id}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotePanel;
