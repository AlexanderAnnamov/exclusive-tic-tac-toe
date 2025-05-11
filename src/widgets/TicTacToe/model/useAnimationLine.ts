import { useEffect, useState } from "react"
import { CellValue } from "../../../entities/Cell/type"

export const useAnimationLine = (params: { winner: CellValue, winningLine: number[] | null }) => {
    const [triggerDraw, setTriggerDraw] = useState(false)

    useEffect(() => {
        if (params.winner && params.winningLine) {
            setTriggerDraw(false)
            setTimeout(() => setTriggerDraw(true), 50)
        }
    }, [params.winner, params.winningLine])

    return triggerDraw

}