/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

import { Square } from "@/components/Square"
import { TURNS } from "@/constant/constant"
import { checkWinner, checkEndGame } from "@/logic/board"
import { WinnerModal } from '@/components/WinnerModal'
import { WinnerType } from "./interfaces/types"

function App() {

  const [board, setBoard] = useState<object[]>(Array(9).fill(null))
  
  const [turn, setTurn] = useState<string>(TURNS.X)

  const [turnToWin, setTurnToWin] = useState<string>(TURNS.X)

  const [winner, setWinner] = useState<WinnerType>({winner: false})

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setTurnToWin(TURNS.X)
    setWinner({winner: false})    
  }

  const updateBoard = (index: number) => {
    console.log(board);
    
    
    if (board[index] || winner.winner) return

    const newBoard = [...board]
    console.log(turn);
    
    newBoard[index] = turn

    setBoard(newBoard)

    const turnToWin = turn
    setTurnToWin(turnToWin)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    console.log(newBoard);
    
    const newWinner = checkWinner(newBoard)
    console.log(newWinner);
    
    if (newWinner) {

      setWinner({winner: newWinner})
    } else if (checkEndGame(newBoard)) {
      setWinner({winner: false})
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <div>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
      </div>

      <WinnerModal resetGame={resetGame} winner={winner.winner} nameWinner={turnToWin} />
    </main>
  )
}

export default App