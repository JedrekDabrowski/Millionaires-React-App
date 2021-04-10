import React, { Component } from 'react';
import Result from "./Result";
import Question from "./Question";
import Scoreboard from "./Scoreboard";
import "../styles/Game.css"

const API ="https://opentdb.com/api.php?amount=1&type=multiple";

class Game extends Component {

    state = { 
        question: ``,
        answers: [],
        correctAnswer: "",
        level: 1,
     }
answers = this.props;

componentDidMount =() =>{
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
        }
        else{
            console.log("Wygrałeś!!!!!!!!!")
        }
    this.nextQuestion()
    }

}
    render() { 
        return ( 
            <div className="Game">  
                <div className="main">
                    <div className="Result">
                    <Result/>
                    </div>
                    <aside className="Scoreboard">
                    <Scoreboard level={this.state.level}/>
                    </aside>
                </div>
        
                <div className="Question">
                <Question question={this.state.question} answers={this.state.answers} result={this.handleAnswer}/>
                </div>


            </div>
         );
    }
}
 
export default Game;