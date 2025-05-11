import React from 'react'

import { TicTacToe } from '../../../widgets/TicTacToe'
import { Typewriter } from '../../../features/viewInfo/ui/TypeWriter'

import useOptionsGame from '../../../context/optionGame/useOptionGame'
import { RefreshPage, RestartGame, VsComputerToggle } from '../../../features/optionsGame'

import styled from '@emotion/styled'

export const GamePage: React.FC = () => {
  const { resetGame, text } = useOptionsGame()

  return (<PageContainer>
    <GameBox>
      <TicTacToe />
      <MenuBox>
        <VsComputerToggle />
        <RestartGame />
        <RefreshPage />
      </MenuBox>
    </GameBox>
    <WinnerBox>
      <Typewriter text={text} onClick={resetGame} />
    </WinnerBox>
  </PageContainer>)
}


const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
`

const GameBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const WinnerBox = styled.div`
  margin-top: 20px
`