function Letter(props) {
    const word = props.word;
    const letterPos = props.letterPos;
    const letter = props.letter;
    function handleColor() {
        if (word == 'null') {
            return "null";
        } 
        if (!letter) {
            return;
        }
        if (word.toUpperCase().includes(letter)) {
            if (word.toUpperCase().charAt(letterPos) == letter) {
                return "green"
            } else {
                return "yellow"
            }
        } else {
            return "wrong";
        }
        
    }
    return (<>
        <div className={props.curr && letter ? "letter-container current" : "letter-container"} id={handleColor()} style={!props.curr ? {animationDelay: `${props.letterPos*.3}s`} : null}>
            {props.letter}
        </div>
    </>)
} export default Letter;