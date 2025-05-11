import { getCoords, getLength } from "../helpers/winnerLine"

export const useCoordsLine = (params: { winningLine: number[] | null, cellSize: number }) => {
      const lineCoords = params.winningLine
    ? (() => {
        const coords = getCoords(params.winningLine, params.cellSize)
        const length = getLength(coords)
        return { ...coords, length }
      })()
    : null
    return lineCoords
}