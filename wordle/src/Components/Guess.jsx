import Letter from "./Letter";

function Guess(props) {
    const defaultRow = ['', '', '', '', ''];
    return (<>
        <div className="row">
            {/*previous */}
            {props.position < props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={props.previous[props.position].charAt(i)} letterPos={i} />
            })}
            {/*current */}
            {props.position == props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={props.guess.charAt(i)} letterPos={i} />
            })}
            {/*future guesses */}
            {props.position > props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={''} letterPos={i} />
            })}
            
        </div>
    </>)
}
export default Guess;