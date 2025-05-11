import { lines } from "../../../constants/lines"
import { CellValue } from "../../../entities/Cell/type"

export function calculateWinner(cells: CellValue[]): CellValue {

  for (const [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a]
    }
  }
  return null
}