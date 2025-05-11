import { useEffect, useState } from "react"
import { CellValue } from "../../entities/Cell/type"
import { textNoInternet, textWinnerFrienship, textWinnerMachine, textWinnerX, textWinnerY } from "../../constants/indicatorText"
import { Players } from "../../constants/players"

export const useTextWinner = ({winner, cells, vsComputer}: {winner: CellValue, cells: CellValue[], vsComputer: boolean}) => {
    const [winnerText, setWinnerText] = useState('')
    const text = winner || cells.every(c => c !== null) ? winnerText : textNoInternet

  useEffect(() => {
    if (winner === Players.x) {
      setWinnerText(textWinnerX)
    } else if (winner === Players.o && vsComputer) {
      setWinnerText(textWinnerMachine)
    } else if(cells.every(c => c !== null)) {
      setWinnerText(textWinnerFrienship)
    } else {
      setWinnerText(textWinnerY)
    }
  }, [winner, cells])

  return {text}
}