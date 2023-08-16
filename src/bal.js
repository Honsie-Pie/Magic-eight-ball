export default function Ball(props){
    return (
        <div id="outer-circle" className={props.anim}>
            <div id="outer-inner"></div>
            <div id="shiny" className="reflection"></div>
            <div id="shadowy" className="reflection"></div>
            <div id="inner-circle">
                <div id="triangle">
                    <h2 className={props.blur?"blurred-answer output-answer":"output-answer"}>{props.answer}</h2>
                </div>
            </div>
        </div>
    );
}