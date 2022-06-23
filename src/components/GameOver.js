import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, currAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.gotWord ? "Voce acertou" : "Você atingiu o limite de erros"}</h3>
        <h1>Palavra : {correctWord}</h1>
        {gameOver.gotWord && (<h3>Você acertou em {currAttempt.attempt} tentativa{(currAttempt.attempt > 1) ? "s": ""} </h3>)}
    </div>
  )
}

export default GameOver