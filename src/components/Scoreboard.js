import React from 'react';
import '../styles/Scoreboard.css'
const Scoreboards = (props) => {
    return ( 
        <div>
            <p className={props.level === 12 ? "active score" :" score"}>1 000 000</p>
            <p className={props.level === 11 ? "active score" :" score"}>500 000</p>
            <p className={props.level === 10 ? "active score" :" score"}>250 000</p>
            <p  className={props.level === 9 ? "active score" :" score"}>125 000</p>
            <p  className={props.level === 8 ? "active score" :" score"}>75 000</p>
            <p  className={props.level === 7 ? "active score" :" score"}>40 000</p>
            <p  className={props.level === 6 ? "active score" :" score"}>20 000</p>
            <p  className={props.level === 5 ? "active score" :" score"}>10 000</p>
            <p  className={props.level === 4 ? "active score" :" score"}>5000</p>
            <p  className={props.level === 3 ? "active score" :" score"}>2000</p>
            <p  className={props.level === 2 ? "active score" :" score"}>1000</p>
            <p  className={props.level === 1 ? "active score" :" score"}>500</p>
        </div>
     );
}
 
export default Scoreboards;