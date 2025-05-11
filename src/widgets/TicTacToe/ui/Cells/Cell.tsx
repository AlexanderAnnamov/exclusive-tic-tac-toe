import Lottie from "lottie-react"
import { CellValue } from "../../../../entities/Cell/type"
import crossData from '../../../../assets/animations/cross.json'
import ovalData from '../../../../assets/animations/oval.json'
import styled from '@emotion/styled'

interface CellProps {
    cell: CellValue
    row: number
    col: number
    cellSize: number
    winner: CellValue
    keyCell: number
    handleClick: (i: number) => void
}

export const Cell: React.FC<CellProps> = (props) => {
    return (    <CellContainer
      key={props.keyCell}
      row={props.row}
      col={props.col}
      cellSize={props.cellSize}
      winner={!!props.winner}
      onClick={() => props.handleClick(props.keyCell)}
    >
        {props.cell === 'X' && (
            <Lottie
                animationData={crossData}
                loop={false}
                autoplay
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                style={{ width: '55%', height: '55%' }}
            />
        )}
        {props.cell === 'O' && (
            <Lottie
                animationData={ovalData}
                loop={false}
                autoplay
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                style={{ width: '55%', height: '55%' }}
            />
        )}
    </CellContainer>)
}

interface CellContainerProps {
  row: number;
  col: number;
  cellSize: number;
  winner: boolean;
}

const CellContainer = styled.div<CellContainerProps>`
  position: absolute;
  top:    ${({ row,    cellSize }) => row    * cellSize}px;
  left:   ${({ col,    cellSize }) => col    * cellSize}px;
  width:  ${({ cellSize })            => cellSize}px;
  height: ${({ cellSize })            => cellSize}px;
  cursor: ${({ winner })              => (winner ? 'default' : 'pointer')};
  display:        flex;
  align-items:    center;
  justify-content: center;
`;