import { useContext } from 'react'

import RefreshIcon from '@mui/icons-material/Refresh'

import { OptionsGameContext } from '../../../context/optionGame/OptionsGameContext'

import styled from '@emotion/styled'

export const RestartGame = () => {

    const { resetGame } = useContext(OptionsGameContext)

    return <Button onClick={resetGame}>
        <RefreshIcon style={{ width: 20 }} />
        <Label>restart game</Label>
    </Button>
}

const Label = styled.p`
    font-size: 12px
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
`