export type LineCoords = { x1: number, y1: number, x2: number, y2: number }

export const getCoords = (line: number[], cellSize: number) => {
    const [a, , c] = line
    if (c - a === 2) {
        const row = Math.floor(a / 3)
        const y = row * cellSize + cellSize / 2.5
        return { x1: 0, y1: y, x2: 188, y2: y }
    } else if (c - a === 6) {
        const col = a % 3
        const x = col * cellSize + cellSize / 2.5
        return { x1: x, y1: 0, x2: x, y2: 188 }
    } else if (a === 0 && c === 8) {
        return { x1: 0, y1: 0, x2: 188, y2: 188 }
    } else {
        return { x1: 188, y1: 0, x2: 0, y2: 188 }
    }
}

export const getLength = ({ x1, y1, x2, y2 }: LineCoords) => Math.hypot(x2 - x1, y2 - y1)