import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./Words"
import GameOver from './components/GameOver';

//para acessar por outros componentes
export const AppContext = createContext();

//variaveis com acesso global ao projeto

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [wordSet, setWordSet] = useState(new Set())
  const [gameOver, setGameOver] = useState({ gameOver: false, gotWord: false })
  const [correctWord, setCorrectWord] = useState("")
  
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.randomWord)
    })
  }, [])

  // Incremento das letras no grid, aumentando posição em cada ocorrência
  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }

  // Efetua a validação da tecla DELETE, removendo a letra da posição, e retornando uma posição
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }

  // Faz a validação da tecla enter, verificando se a posição é a 5, e inicializando a posição da letra, e incrementando a linha
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currentWord = ""
    for (let i = 0; i < 5; i++) {
      currentWord += board[currAttempt.attempt][i]
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Palavra não encontrada")
    }

    if (currentWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, gotWord: true })
      return
    }

    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, gotWord: false })
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>Charada</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, correctWord, setGameOver, gameOver }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App