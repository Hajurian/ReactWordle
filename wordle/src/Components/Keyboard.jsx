import { useEffect, useState } from 'react';
import '../Styles/Keyboard.css'
function Keyboard(props) {
    const row1 = ['q','w','e','r','t','y','u','i','o','p'];
    const row2 = ['a','s','d','f','g','h','j','k','l'];
    const row3 = ['z','x','c','v','b','n','m'];
    const [keys, setKeys] = useState(props.guesses);
    //A key component for the keyboard
    const Key = (props) => {
        return (<>
            <div className="key-container">
                <h1>{props.letter}</h1>
            </div>
        </>)
    }
    return (<>
        <div className="keyboard">
            <div className="keyboard-row">
                {row1.map((letter, idx) => {
                    return <Key key={idx} letter={letter} />
                })}
            </div>
            <div className="keyboard-row">
                {row2.map((letter, idx) => {
                    return <Key key={idx} letter={letter} />
                })}
            </div>
            <div className="keyboard-row">
                {row3.map((letter, idx) => {
                    return <Key key={idx} letter={letter} />
                })}
            </div>
        </div>
    </>)
}
export default Keyboard;