import React, { useContext } from 'react';
import '../styles/Result.css';
import money from '../img/money.jpg';
import GameContext from './GameContext';

function Result(props) {
  const gameCtx = useContext(GameContext);
  return (
    <div>
      {gameCtx.gameResult.hasWon ? (
        <div className='won'>
          <h1>You won!</h1>
          <p>1 000 000 $</p>
          <img className='money' src={money} alt='One million dollars' />
          <button className='newGame' onClick={gameCtx.handleNewGame}>
            Start New Game
          </button>
        </div>
      ) : (
        <div className='lose'>
          <h1>You lose</h1>
          <p>Maybe you'll have better luck next time!</p>
          <p className='correct'>
            Corect Answer was <span>{gameCtx.correctAnswer}</span>
          </p>
          <button className='newGame' onClick={gameCtx.handleNewGame}>
            Start New Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
