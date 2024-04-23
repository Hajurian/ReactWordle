function Letter(props) {
    const word = props.word;
    const letterPos = props.letterPos;
    const letter = props.letter;
    function handleColor() {
        if (word == 'null') {
            return "inherit";
        } 
        if (!letter) {
            return;
        }
        if (word.toUpperCase().includes(letter)) {
            if (word.toUpperCase().charAt(letterPos) == letter) {
                return "#6ca965"
            } else {
                return "#c8b653"
            }
        } else {
            return "rgb(31, 33, 43)";
        }
        
    }
    return (<>
        <div className={props.curr && letter ? "letter-container current" : "letter-container"} style={{backgroundColor:handleColor()}}>
            {props.letter}
        </div>
    </>)
} export default Letter;