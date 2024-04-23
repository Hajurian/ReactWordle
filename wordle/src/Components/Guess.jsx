import Letter from "./Letter";

function Guess(props) {
    const defaultRow = ['', '', '', '', ''];
    return (<>
        <div className="row">
            {/*previous */}
            {props.word && props.position < props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={props.previous[props.position].charAt(i)} letterPos={i} word={props.word}/>
            })}
            {/*current */}
            {props.word && props.position == props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={props.guess.charAt(i)} letterPos={i} word={"null"} curr={true}/>
            })}
            {/*future guesses */}
            {props.word && props.position > props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={''} letterPos={i} word={"null"}/>
            })}
            
        </div>
    </>)
}
export default Guess;