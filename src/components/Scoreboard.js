import React from 'react';
import '../styles/Scoreboard.css';
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
  return (
    <div>
      {scoreArray.map((score, id) => (
        <p
          key={id}
          className={props.level === 12 - id ? 'active score' : ' score'}
        >
          {scoreArray[id]}
        </p>
      ))}
    </div>
  );
}

export default Scoreboards;
