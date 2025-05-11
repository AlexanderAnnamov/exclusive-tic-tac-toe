import React from 'react'
import { useGame } from '../model/useGame'
import styled from '@emotion/styled'
import { useAnimationLine } from '../model/useAnimationLine'
import { useCoordsLine } from '../model/useCoordsLine'
import { GameGrid } from './GameDrid'
import { Cells } from './Cells/Cells'
import { WinnerLine } from './WinnerLine'

export const TicTacToe: React.FC = () => {
  const { cells, winner, winningLine, handleClick } = useGame()
  const triggerDraw = useAnimationLine({ winner, winningLine })

  const size = 200
  const cellSize = size / 3

  const lineProps = useCoordsLine({ winningLine, cellSize })

  return (
    <GameContainer>
      <GameGrid>
        <Cells
          cells={cells}
          cellSize={cellSize}
          winner={winner}
          handleClick={handleClick} />
        <WinnerLine
          lineProps={lineProps}
          triggerDraw={triggerDraw} />
      </GameGrid>
    </GameContainer>
  )
}

const GameContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`
