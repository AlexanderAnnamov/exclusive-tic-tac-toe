import { getBestMove } from './getBestMove'
import { CellValue } from '../../../entities/Cell/type'

export function makeComputerMove(cells: CellValue[]): CellValue[] {
  const emptyIndices = cells
    .map((v, i) => (v === null ? i : -1))
    .filter(i => i >= 0)

  let move: number

  if (Math.random() < 0.7) {
    const best = getBestMove(cells)
    move = best >= 0 ? best : emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
  } else {
    move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
  }

  const next = [...cells]
  next[move] = 'O'
  return next
}
