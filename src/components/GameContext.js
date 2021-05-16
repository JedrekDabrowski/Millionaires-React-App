import { createContext, useState, useEffect } from 'react';
const API =
  'https://opentdb.com/api.php?amount=1&type=multiple&encode=base64&difficulty=easy';

const GameContext = createContext({
  question: '',
  answers: [],
  correctAnswer: '',
  gameResult: {
    level: 1,
    hasWon: false,
    hasEnded: false,
  },
  nextQuestion: () => {},
  handleAnswer: () => {},
  handleNewGame: () => {},
});

export function GameContextProvider({ children }) {
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
  const context = {
    question,
    answers,
    correctAnswer,
    gameResult,
    nextQuestion,
    handleAnswer,
    handleNewGame,
  };
  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}

export default GameContext;
