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
        <div>
            <h2>{this.props.question}</h2>
            <div className="answers" >
                <div className="answer left">
                    <label htmlFor="A">{answers[0]}</label>
                    <input type="radio" id="A" name="answer" value={answers[0]} onChange={this.handleAnswerChange}/>
                </div>
                <div className="answer right">
                    <label htmlFor="B">{answers[1]}</label>
                    <input type="radio" id="B" name="answer" value={answers[1]} onChange={this.handleAnswerChange}/>
                </div>
                <div className="answer left">
                    <label htmlFor="C">{answers[2]}</label>
                    <input type="radio" id="C" name="answer" value={answers[2]} onChange={this.handleAnswerChange}/>
                </div>
                <div className="answer right">
                    <label htmlFor="D">{answers[3]}</label>
                    <input type="radio" id="D" name="answer" value={answers[3]} onChange={this.handleAnswerChange}/>
                </div>
                <button onClick={this.handleAnswer}>Final Answer</button>
            </div>

        </div>
     );
    }
}
 
export default Question;