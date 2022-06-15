import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState } from "react";
import {boardDefault} from "./Words"

//para acessar por outros componentes
export const AppContext = createContext();

//variaveis com acesso global ao projeto

function App() {
  const [board, setBoard] = useState(boardDefault)
  return ( 
    <div className="App">
      <nav>
        <h1>Charada</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App;