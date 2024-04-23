import { useEffect, useState } from "react";
import Guess from "./Guess";
import '../Styles/Board.css'

function Board(props) {
    //variables
    const [guess, setGuess] = useState('');
    const [current, setCurrent] = useState(0);
    const defaultBoard = ['','','','','','']
    const [previous, setPrevious] = useState([]);


    //handler for key presses
    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            if (guess.length != 5) {
                return;
            }
            handleGuess(guess);
            setCurrent(current + 1);
        }
        if (event.key == 'Backspace') {
            setGuess(guess.substring(0, guess.length - 1))
            return;
        }
        //no special characters
        if (event.key.length > 1) {
            return;
        }
        if (guess.length >= 5){
            return;
        } 
        setGuess(guess + event.key)
    }

    //guess handler
    const handleGuess = (guess) => {
        if (guess == props.word){
            console.log("WIN")
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
            </div>
        </>
    )
}
export default Board;