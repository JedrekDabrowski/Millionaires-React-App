import React, { useState } from 'react';
import '../styles/Question.css';
function Question(props) {
  const [choosenAnswer, setChoosenAnswer] = useState('');
  //props.answers zawiera zawsze dobra odpowiedz na koncu
  //metoda sort pomiesza kolejnosć,a by uniknąć sytuacji, że poprawan odpowiedź jest zawsze w tym samym miejscu

  function handleAnswerChange(e) {
    setChoosenAnswer(e.target.value);
  }
  function handleFinalAnswer(e) {
    e.preventDefault();
    props.result(choosenAnswer);
  }

  let answers = props.answers.sort();

  return (
    <>
      <h2>{props.question}</h2>
      <div className='answers'>
        {answers.map((answer, id) => (
          <div key={id} className='answer'>
            <button
              name='answer'
              value={answers[id]}
              onClick={handleAnswerChange}
              id={choosenAnswer === answers[id] ? 'choosen' : null}
            >
              {answers[id]}
            </button>
          </div>
        ))}
        <div className='final'>
          <button className='final' onClick={handleFinalAnswer}>
            Final Answer
          </button>
        </div>
      </div>
    </>
  );
}

export default Question;
