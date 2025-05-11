import { lines } from '../../../constants/lines'
import { CellValue } from '../../../entities/Cell/type'

export function getWinningLine(cells: CellValue[]): number[] | null {
  for (const line of lines) {
    const [a, b, c] = line
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return line
    }
  }
  return null
}
