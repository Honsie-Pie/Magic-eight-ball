export default function Ball(props){
    return (
        <div className="circle">
            <div className="triangle">
                <h2>{props.answer}</h2>
            </div>
        </div>
    );
}