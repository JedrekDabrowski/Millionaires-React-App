import React from 'react';
import '../styles/Result.css';
import money from '../img/money.jpg';

function Result(props) {
  return (
    <div>
      {props.won ? (
        <div className='won'>
          <h1>You won!</h1>
          <p>1 000 000 $</p>
          <img className='money' src={money} alt='One million dollars' />
          <button className='newGame' onClick={props.newGame}>
            Start New Game
          </button>
        </div>
      ) : (
        <div className='lose'>
          <h1>You lose</h1>
          <p>Maybe you'll have better luck next time!</p>
          <p className='correct'>
            Corect Answer was <span>{props.correct}</span>
          </p>
          <button className='newGame' onClick={props.newGame}>
            Start New Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
