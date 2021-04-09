import React, { Component } from 'react';
import Result from "./Result";
import Question from "./Question";
import Scoreboard from "./Scoreboard";
import "../styles/Game.css"
class Game extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Game">  
                <div className="main">
                    <div className="Result">
                    <Result/>
                    </div>
                    <aside className="Scoreboard">
                    <Scoreboard/>
                    </aside>
                </div>
        
                <div className="Question">
                <Question/>
                </div>


            </div>
         );
    }
}
 
export default Game;