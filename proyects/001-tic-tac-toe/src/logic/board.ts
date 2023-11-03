/* eslint-disable @typescript-eslint/no-explicit-any */
import { WINNER_COMBINATIONS } from "@/constant/constant";

export const checkWinner = (boardToCheck:object[]) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBINATIONS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return true
    }
  }
  // si no hay ganador
  return false
}

export const checkEndGame = (newBoard:object[]) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  console.log(typeof(newBoard));
  console.log(newBoard);
  return newBoard.every((square:any) => square !== null)
}