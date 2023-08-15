export default function AnswerSpace(props){
    return(
        <div className="answer-space">
            <h1>{props.question}</h1>
            <h2>{props.answer}</h2>
        </div>
    );
}