import { useState } from "react"
import conffetti from 'canvas-confetti'

import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { WinnerModal } from "./components/WinnerModal"
import { checkEndGame, checkWinnerFrom } from "./logic/board"
import { TurnSection } from "./components/TurnSection"


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null) // null = sin ganador, false = empate

  const updateBoard = (index) => {
    //no actualizar si la posicion tiene algo
    if (board[index] || winner) return

    //act. tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      conffetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard))
    {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
        <TurnSection turn={turn} />
      <section>
        <WinnerModal winner={winner} resetGame={resetGame}>{winner}</WinnerModal>
      </section>
    </main>
  )
}

export default App
