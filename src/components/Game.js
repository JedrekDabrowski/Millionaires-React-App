import React, { useState, useEffect } from 'react';
import Result from './Result';
import Question from './Question';
import Scoreboard from './Scoreboard';
import '../styles/Game.css';

const API =
  'https://opentdb.com/api.php?amount=1&type=multiple&encode=base64&difficulty=easy';
function Game() {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [gameResult, setGameResult] = useState({
    level: 1,
    hasWon: false,
    hasEnded: false,
  });

  useEffect(() => {
    nextQuestion();
  }, []);

  function nextQuestion() {
    fetch(API)
      .then((result) => {
        if (result.ok) return result;
        throw Error("Can't fetch data.");
      })
      .then((result) => result.json())
      .then((data) => {
        let answers = data.results[0].incorrect_answers.map((ia) => atob(ia));
        answers.push(atob(data.results[0].correct_answer));

        const question = atob(data.results[0].question);
        const correctAnswer = atob(data.results[0].correct_answer);
        setQuestion(question);
        setAnswers(answers);
        setCorrectAnswer(correctAnswer);
      });
  }

  function handleAnswer(choosenAnswer) {
    if (choosenAnswer === correctAnswer) {
      if (gameResult.level < 12) {
        setGameResult((prevValue) => ({
          ...prevValue,
          level: prevValue.level + 1,
        }));
        nextQuestion();
      } else {
        setGameResult({
          hasWon: true,
          hasEnded: true,
          level: 12,
        });
      }
    } else {
      setGameResult({
        level: 1,
        hasEnded: true,
        hasWon: false,
      });
    }
  }

  function handleNewGame() {
    setGameResult({
      level: 1,
      hasEnded: false,
      hasWon: false,
    });
    nextQuestion();
  }

  return (
    <div className='Game'>
      <div className='main'>
        {gameResult.hasEnded ? (
          <div className='result'>
            <Result
              won={gameResult.hasWon}
              correct={correctAnswer}
              newGame={handleNewGame}
            />
          </div>
        ) : (
          <div className='question'>
            <Question
              question={question}
              answers={answers}
              result={handleAnswer}
            />
          </div>
        )}

        <aside className='Scoreboard'>
          <Scoreboard level={gameResult.level} />
        </aside>
      </div>
    </div>
  );
}

export default Game;
