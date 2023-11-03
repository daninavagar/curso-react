// import { Square } from "@/components/Square";
import { WinnerType } from "@/interfaces/types"

export function WinnerModal({ winner, resetGame, nameWinner }: WinnerType) {
  
  if (!winner) return null

  const winnerText = !winner ? 'Empate': 'Ganó'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          { winner } { nameWinner }
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de Nuevo</button>
        </footer>
      </div>
    </section>
  )
}