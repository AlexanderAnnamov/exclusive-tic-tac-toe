import { CellValue } from "../../../entities/Cell/type"
import { calculateWinner } from "./calculateWinner"

export function minimax(cells: CellValue[], isMaximizing: boolean): number {
    const winner = calculateWinner(cells)
    if (winner === 'O') return  1
    if (winner === 'X') return -1
    if (!cells.includes(null))   return  0
  
    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (cells[i] === null) {
          cells[i] = 'O'
          bestScore = Math.max(bestScore, minimax(cells, false))
          cells[i] = null
        }
      }
      return bestScore
    } else {
      let bestScore =  Infinity
      for (let i = 0; i < 9; i++) {
        if (cells[i] === null) {
          cells[i] = 'X'
          bestScore = Math.min(bestScore, minimax(cells, true))
          cells[i] = null
        }
      }
      return bestScore
    }
  }