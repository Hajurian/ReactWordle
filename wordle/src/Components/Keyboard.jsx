import { useEffect, useState } from 'react';
import '../Styles/Keyboard.css'
function Keyboard(props) {
    //key board letters
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    //A key component for the keyboard
    const Key = (props) => {
        let id = props.keyMap.get(props.letter);
        if (id == 0) {
            id = 'incorrect';
        } else if (id == 1) {
            id = 'almost';
        } else if (id == 2 ) {
            id = 'correct';
        } else {
            id = 'nullkey'
        }
        function handleClick() {
            props.onClick({
                key: props.letter,
            })
        }
        return (<>
            <div className="key-container" id = {id} onClick={handleClick}>
                {props.letter}
            </div>
        </>)
    }
    return (<>
        <div className="keyboard">
            <div className="keyboard-row">
                {row1.map((letter, idx) => {
                    return <Key key={idx} letter={letter} keyMap={props.keyMap} onClick={props.onClick}/>
                })}
            </div>
            <div className="keyboard-row">
                {row2.map((letter, idx) => {
                    return <Key key={idx} letter={letter} keyMap={props.keyMap} onClick={props.onClick}/>
                })}
            </div>
            <div className="keyboard-row">
                {row3.map((letter, idx) => {
                    return <Key key={idx} letter={letter} keyMap={props.keyMap} onClick={props.onClick}/>
                })}
            </div>
        </div>
    </>)
}
export default Keyboard;