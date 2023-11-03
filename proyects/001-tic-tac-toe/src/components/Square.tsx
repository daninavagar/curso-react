// import { SquareType } from '@/interfaces/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Square = ({updateBoard, children, isSelected, index}: any) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  

  return (
    <div onClick={handleClick} className={className}>
      { children }
    </div>
  )
}