import Lottie from "lottie-react"
import gridData from '../../../assets/animations/grid.json'
import React from "react"

interface GameGridProps {
    children: React.ReactNode
}

export const GameGrid: React.FC<GameGridProps> = (props) => {
    return <>
        <Lottie
            animationData={gridData}
            loop={false}
            autoplay
            rendererSettings={{ viewBoxOnly: true }}
            style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                backgroundColor: '#fedbfe',
            }} />
        {props.children}
    </>
}