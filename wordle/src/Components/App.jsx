import { useEffect, useState } from 'react'
import Board from './Board'
import words from '../assets/WORDS.txt'
import '../Styles/App.css'
import { initializeApp } from "firebase/app";

function App() {

  const firebaseConfig = {
    apiKey:"process.env.API_KEY",
    authDomain: "ddrsearch-580da.firebaseapp.com",
    projectId: "ddrsearch-580da",
    storageBucket: "ddrsearch-580da.appspot.com",
    messagingSenderId: "38947683255",
    appId: "1:38947683255:web:25871a4e95c9bd9a9ac632"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const [word, setWord] = useState("");
  const [wordBank, setWordBank] = useState([]);
  useEffect(() =>{
    fetch(words)
    .then((r) => r.text())
    .then(text  => {
      const wordBank = text.split('\n');
      setWordBank(wordBank);
      setWord(wordBank[Math.floor(Math.random() * wordBank.length)]);
    })
  }, [])
    
  return (
    <>
      <section className='content'>
        <h1>WURDLE</h1>
        {word && <Board wordBank={wordBank} word={word}/>}
      </section>
    </>
  )
}

export default App
