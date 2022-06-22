import React, { useContext } from 'react'
import { AppContext } from "../App"

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord } = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  const correct = correctWord[letterPos] === letter
  //a letra não pode estar na posição correta, não vazia e deve estar inclusa na palavra 
  const almost = !correct && letter !== "" && correctWord.includes(letter)
  const letterState = correct ? "correct" : almost ? "almost" : "error"

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter