import React, { useContext } from 'react'
import { AppContext } from "../App"

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  const correct = correctWord.toUpperCase()[letterPos] === letter
  //a letra não pode estar na posição correta, não vazia e deve estar inclusa na palavra 
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter)
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error")
  // habilitar para verificar palavra correta no console para teste
  // console.log(correctWord)
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter