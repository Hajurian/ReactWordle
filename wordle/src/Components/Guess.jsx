import Letter from "./Letter";

function Guess(props) {
    const defaultRow = ['', '', '', '', ''];
    return (<>
        <div className="row">
            
            {props.position < props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={'b'} />
            })}
            {/*current */}
            {props.position == props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={props.guess.charAt(i)} />
            })}
            {/*previous */}
            {/*future guesses */}
            {props.position > props.currentPos && defaultRow.map((letter, i) => {
                return <Letter key={i} letter={'a'} />
            })}
            
        </div>
    </>)
}
export default Guess;