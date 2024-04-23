function Letter(props) {
    const word = props.word;
    const letterPos = props.letterPos;
    const letter = props.letter;
    function handleColor() {
        if (word == 'null') {
            return "gray";
        } 
        if (!letter) {
            return;
        }
        if (word.includes(letter)) {
            if (word.charAt(letterPos) == letter) {
                return "#6ca965"
            } else {
                return "#c8b653"
            }
        } else {
            return "gray";
        }
        
    }
    return (<>
        <div className="letter-container" style={{backgroundColor:handleColor()}}>
            {props.letter}
        </div>
    </>)
} export default Letter;