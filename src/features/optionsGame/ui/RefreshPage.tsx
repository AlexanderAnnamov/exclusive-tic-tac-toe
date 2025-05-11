import RefreshIcon from '@mui/icons-material/Refresh'

import styled from '@emotion/styled'

export const RefreshPage = () => {

    const reload = () => window.location.reload()

    return <Button onClick={reload}>
        <RefreshIcon style={iconStyles} />
        <Label>refresh page</Label>
    </Button>
}

const iconStyles = { width: 20, color: '#9C27B0' }

const Label = styled.p`
    font-size: 12px;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 9px;
    color: #9C27B0;
    margin-top: 5px
`