import Ball from './bal.js';

export default function AnswerSpace(props){
    return(
        <div className="answer-space">
            <h1 className={props.blur? "output-question blurred-question": "output-question"}>{props.question}</h1>
            <Ball answer={props.answer} anim={props.anim} blur={props.blur}/>
            <div className="ball-shadow"></div>
        </div>
    );
}