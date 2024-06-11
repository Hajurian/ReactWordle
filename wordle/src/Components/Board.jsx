import { useEffect, useState } from "react";
import Guess from "./Guess";
import '../Styles/Board.css'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Keyboard from "./Keyboard";

function Board(props) {
    //variables
    const [guess, setGuess] = useState('');
    const [current, setCurrent] = useState(0);
    const defaultBoard = ['', '', '', '', '', '']
    const [previous, setPrevious] = useState([]);
    const [keyMap, setKeyMap] = useState(new Map());
    //logs the word once
    useEffect(() => {
        console.log(props.word);
    }, [])
    //2 means right letter right spot, 1 means right letter wrong spot, 0 means wrong letter
    useEffect(() => {
        //loop through all previous
        for (let i in previous) {
            //the current word
            const currWord = previous[i].split('');
            //checking each character
            for (let j in currWord) {
                //if the letter is in the word
                if (props.word.toUpperCase().includes(currWord[j])) {
                    //if the letter is in the correct spot
                    if (props.word.toUpperCase()[j] == currWord[j]) {
                        setKeyMap(map => new Map(map.set(currWord[j], 2)));
                    } else {
                        setKeyMap(map => new Map(map.set(currWord[j], 1)));
                    }
                } else {
                    setKeyMap(map => new Map(map.set(currWord[j], 0)));
                }
            }
        }
    }, [previous])
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
        if (guess.length >= 5) {
            return;
        }
        //no special characters
        if (event.keyCode < 65 || event.keyCode > 90) {
            return;
        }
        setGuess(guess + event.key.toUpperCase())
    }
    const handleKeyClick = (key) => {
        if (guess.length >= 5) {
            return;
        }
        setGuess(guess + key.key)
    }
    //guess handler
    const handleGuess = (guess) => {
        if (current == 5 && guess != props.word.toUpperCase()) {
            toast.error('YOU LOSE! Refresh page to play again');
        }
        if (guess.toUpperCase() == props.word.toUpperCase()) {
            toast.success('YOU WIN! Refresh page to play again');
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

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                limit={1}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition = {Slide}
            />
            <div className="board">
                {defaultBoard.map((g, i) => {
                    return <Guess key={i} guess={guess} previous={previous} position={i} currentPos={current} word={props.word} />
                })}
                <Keyboard word={props.word} keyMap={keyMap} onClick={handleKeyClick} />
            </div>
        </>
    )
}
export default Board;