import React, { Component } from 'react';
import '../styles/Question.css'

class Question extends Component {
    state = {
        choosenAnswer: ""
    }
    //props.answers zawiera zawsze dobra odpowiedz na koncu
    //metoda sort pomiesza kolejnosć,a by uniknąć sytuacji, że poprawan odpowiedź jest zawsze w tym samym miejscu

    handleAnswerChange=(e)=>{
        this.setState({
            choosenAnswer: e.target.value,
        })
    }
    handleAnswer =(e)=>{
        e.preventDefault()
        this.props.result(this.state.choosenAnswer)
    }

    render(){
        let answers = this.props.answers.sort()
        return ( 
        <>
            <h2>{this.props.question}</h2>
            <div className="answers" >

                <div className="answer">
                <button  name="answer" value={answers[0]} onClick={this.handleAnswerChange} id={this.state.choosenAnswer === answers[0] ? "choosen":null}>{answers[0]} </button>
                </div>

                <div className="answer">
                <button  name="answer" value={answers[1]} onClick={this.handleAnswerChange}  id={this.state.choosenAnswer === answers[1] ? "choosen":null}>{answers[1]}</button>
                </div>

                <div className="answer">
                    <button name="answer" value={answers[2]} onClick={this.handleAnswerChange}  id={this.state.choosenAnswer === answers[2] ? "choosen":null}>{answers[2]}</button>
                </div>

                <div className="answer">
                <button  name="answer" value={answers[3]} onClick={this.handleAnswerChange}  id={this.state.choosenAnswer === answers[3] ? "choosen":null}>{answers[3]}</button>
                </div>
                <div className="final">
                <button className="final" onClick={this.handleAnswer}>Final Answer</button>
                </div>
            </div>

        </>
     );
    }
}
 
export default Question;