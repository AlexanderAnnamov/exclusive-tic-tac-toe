import { CellValue } from "../../../entities/Cell/type"
import { minimax } from "./minimax"

export function getBestMove(cells: CellValue[]): number {
    let bestScore = -Infinity
    let move = -1
    for (let i = 0; i < 9; i++) {
      if (cells[i] === null) {
        cells[i] = 'O'
        const score = minimax(cells, false)
        cells[i] = null
        if (score > bestScore) {
          bestScore = score
          move = i
        }
      }
    }
    return move
  }