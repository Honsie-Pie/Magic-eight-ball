export default function Ball(props){
    return (
        <div id="outer-circle">
            <div id="inner-circle">
                <div id="triangle">
                    <h2 className="output-answer">{props.answer}</h2>
                </div>
            </div>
        </div>
    );
}