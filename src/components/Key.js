import React, { useContext } from 'react'
import { AppContext } from "../App"

function Key({ keyVal, specialKey }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext)
  const selectLetter = () => {

    // Faz a validação da tecla enter, verificando se a posição é a 5, e inicializando a posição da letra, e incrementando a linha
    if (keyVal === "ENTER") {
      onEnter();

      // Efetua a validação da tecla DELETE, removendo a letra da posição, e retornando uma posição
    } else if (keyVal === "DELETE") {
      onDelete();

      // Incremento das letras no grid, aumentando posição em cada ocorrência
    } else {
      onSelectLetter(keyVal);
    }
  }
  return (
    <div className='key' id={specialKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Key