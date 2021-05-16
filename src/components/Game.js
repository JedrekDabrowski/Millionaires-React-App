import React, { useContext } from 'react';
import Result from './Result';
import Question from './Question';
import Scoreboard from './Scoreboard';
import GameContext from './GameContext';
import '../styles/Game.css';

function Game() {
  const GameCtx = useContext(GameContext);

  return (
    <div className='Game'>
      <div className='main'>
        {GameCtx.gameResult.hasEnded ? (
          <div className='result'>
            <Result />
          </div>
        ) : (
          <div className='question'>
            <Question />
          </div>
        )}
        <aside className='Scoreboard'>
          <Scoreboard />
        </aside>
      </div>
    </div>
  );
}

export default Game;
