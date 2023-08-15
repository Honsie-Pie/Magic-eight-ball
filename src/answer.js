import Ball from './bal.js';

export default function AnswerSpace(props){
    return(
        <div className="answer-space">
            <h1 id="output-uestion">{props.question}</h1>
            <Ball answer={props.answer}/>
        </div>
    );
}