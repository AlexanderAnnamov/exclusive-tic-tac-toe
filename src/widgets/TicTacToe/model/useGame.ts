import { useEffect } from 'react'
import { getWinningLine } from '../../../features/computerMove/model/getWinningLine'
import { makeComputerMove } from '../../../features/computerMove/model/makeComputerMove'
import useOptionsGame from '../../../context/optionGame/useOptionGame'
import { Players } from '../../../constants/players'

export function useGame() {
  const { vsComputer, cells, turn, winner, setTurn, setCells, resetGame } = useOptionsGame()

  useEffect(() => {
    resetGame()
  }, [vsComputer])

  const winningLine = getWinningLine(cells)

  const handleClick = (i: number) => {
    if (cells[i] || winner || (vsComputer && turn === Players.o)) return
    const next = [...cells]
    next[i] = turn
    setCells(next)
    setTurn(turn === Players.x ? Players.o : Players.x)
  }

  useEffect(() => {
    if (!vsComputer) return
    if (turn === Players.o && !winner) {
      const timer = setTimeout(() => {
        const next = makeComputerMove(cells)
        setCells(next)
        setTurn(Players.x)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [cells, turn, vsComputer, winner])

  return { cells, turn, winner, winningLine, handleClick, resetGame }
}
