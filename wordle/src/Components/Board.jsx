import { useEffect, useState } from "react";
import Letter from "./Letter";

function Board() {
    const [guess, setGuess] = useState('');
    const defaultBoard = ['','','','','']
    const handleKeyDown = (event) => {
        if (event.key == 'Backspace') {
            setGuess(guess.substring(0, guess.length - 1))
            return;
        }
        if (guess.length >= 5){
            return;
        } 
        setGuess(guess + event.key)
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return(
        <>
            <div className="board">
                <div className="row">
                    {defaultBoard.map((letter, i) => {
                        
                    })}
                </div>
            </div>
        </>
    )
}
export default Board;