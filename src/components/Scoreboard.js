import React, { useContext } from 'react';
import '../styles/Scoreboard.css';
import GameContext from './GameContext';
function Scoreboards(props) {
  const scoreArray = [
    '1 000 000',
    '500 000',
    '250 000',
    '125 000',
    '75 000',
    '40 000',
    '20 000',
    '10 000',
    '5000',
    '2000',
    '1000',
    '500',
  ];

  const gameCtx = useContext(GameContext);
  return (
    <div>
      {scoreArray.map((score, id) => (
        <p
          key={id}
          className={
            gameCtx.gameResult.level === 12 - id ? 'active score' : ' score'
          }
        >
          {scoreArray[id]}
        </p>
      ))}
    </div>
  );
}

export default Scoreboards;
