export default function QuestionSpace(props){
    return (
        <div className="question-space">
            <input id="question" type="text" value={props.input} onChange={props.handleChange}/>
            <button id="submit" onClick={props.handleSubmit}>Shake!</button>
        </div>
    );
}