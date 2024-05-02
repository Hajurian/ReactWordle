import { useEffect, useState } from "react";
import Guess from "./Guess";
import '../Styles/Board.css'
import Keyboard from "./Keyboard";

function Board(props) {
    //variables
    const [guess, setGuess] = useState('');
    const [current, setCurrent] = useState(0);
    const defaultBoard = ['','','','','','']
    const [previous, setPrevious] = useState([]);

    console.log(props.word);
    //handler for key presses
    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            if (guess.length != 5) {
                return;
            }
            if (props.wordBank.indexOf(guess.toLowerCase()) < 0) {
                return;
            }
            handleGuess(guess);
            setCurrent(current + 1);
        }
        if (event.key == 'Backspace') {
            setGuess(guess.substring(0, guess.length - 1))
            return;
        }
        //no long characters
        if (event.key.length > 1) {
            return;
        }

        //keep guess at length 5
        if (guess.length >= 5){
            return;
        }
        //no special characters
        if (event.keyCode < 65 || event.keyCode > 90) {
            return;
        } 
        setGuess(guess + event.key.toUpperCase())
    }

    //guess handler
    const handleGuess = (guess) => {
        if (current == 5 && guess != props.word.toUpperCase()) {
            console.log("LOSE")
        }
        if (guess.toUpperCase() == props.word.toUpperCase()){
            console.log("WIN")
            setPrevious([...previous, guess]);
        } else {
            setPrevious([...previous, guess]);
            setGuess("");
        }
    }
    //eventlistener mounter
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return(
        <>
            <div className="board">
                {defaultBoard.map((g, i) => {
                    return <Guess key={i} guess={guess} previous={previous} position={i} currentPos={current} word={props.word}/>    
                })}
                <Keyboard guesses={previous} word={props.word}/>
            </div>
        </>
    )
}
export default Board;