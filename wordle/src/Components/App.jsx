import { useEffect, useState } from 'react'
import Board from './Board'
import words from '../assets/WORDS.txt'
import '../Styles/App.css'

function App() {
  const [word, setWord] = useState("");
  useEffect(() =>{
    fetch(words)
    .then((r) => r.text())
    .then(text  => {
      const wordBank = text.split('\n');
      setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
    })
  }, [])
    
  return (
    <>
      <section className='content'>
        <h1>Title</h1>
        {word && <Board word={word}/>}
      </section>
    </>
  )
}

export default App
