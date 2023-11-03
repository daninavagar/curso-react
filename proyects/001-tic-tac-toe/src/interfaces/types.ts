/* eslint-disable @typescript-eslint/no-explicit-any */
interface ISquare {
  children?: any;
  isSelected?: boolean;
  updateBoard?: any;
  index?: number;
}

interface IWinner {
  winner?: boolean;
  resetGame?: any;
  nameWinner?: string;

}

export type { ISquare as SquareType }
export type { IWinner as WinnerType }

