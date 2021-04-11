import React, { Component } from 'react';
import Result from "./Result";
import Question from "./Question";
import Scoreboard from "./Scoreboard";
import "../styles/Game.css"

const API ="https://opentdb.com/api.php?amount=1&type=multiple"
class Game extends Component {

    state = { 
        question: ``,
        answers: [],
        correctAnswer: "",
        level: 1,
        hasWon: false,
        hasEnded: false,
     }
answers = this.props;

componentDidMount =() =>{
this.nextQuestion()
}

nextQuestion = () =>{
    fetch(API)
    .then( result =>{
        if(result.ok) return result;
        throw Error("Can't fetch data")
    })
    .then(result => result.json())
    .then(data =>{
    
        let answers = [...data.results[0].incorrect_answers]
        answers.push(data.results[0].correct_answer)

        this.setState({
            question: data.results[0].question,
            answers,
            correctAnswer: data.results[0].correct_answer
        })
    })

}

handleAnswer = (choosenAnswer) =>{
    if(choosenAnswer === this.state.correctAnswer)
    {
        if(this.state.level <12){
        this.setState(prevState =>({
            level: prevState.level +1,
        }))
        this.nextQuestion()
        }
        else{
            this.setState({
                hasEnded: true,
                hasWon: true
            })
    
        }
    }
    else{
        this.setState({
            hasEnded: true,
        })
    }

}

handleNewGame =() =>{
    this.setState({
        hasEnded: false,
        level: 1,
        hasWon: false,
    })
    this.nextQuestion()
}
    render() { 
        return ( 
            <div className="Game">  
                <div className="main">
                        {this.state.hasEnded ? (
                            <div className="result">
                                <Result won={this.state.hasWon} correct={this.state.correctAnswer} newGame ={this.handleNewGame}/>
                            </div>
                        ):
                        (
                            <div className="question">
                            <Question question={this.state.question} answers={this.state.answers} result={this.handleAnswer}/>
                            </div>
                        )
                        }
                        
                    
                    <aside className="Scoreboard">
                    <Scoreboard level={this.state.level}/>
                    </aside>
                </div>
        



            </div>
         );
    }
}
 
export default Game;