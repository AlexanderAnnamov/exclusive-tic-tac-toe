import React from "react"
import { CellValue } from "../../../../entities/Cell/type"
import { Cell } from "./Cell"

interface CellsProps {
    cells: CellValue[]
    cellSize: number
    winner: CellValue
    handleClick: (i: number) => void
}

export const Cells: React.FC<CellsProps> = (props) => {
    return <>
        {props.cells.map((cell, i) => {
            const row = Math.floor(i / 3)
            const col = i % 3
            return (
                <Cell
                    key={i}
                    row={row}
                    col={col}
                    cell={cell}
                    cellSize={props.cellSize}
                    winner={props.winner}
                    handleClick={props.handleClick}
                    keyCell={i} />
            )
        })}
    </>
}