import React, {
  createContext, useState, ReactNode, Dispatch,
  SetStateAction
} from 'react'

import { calculateWinner } from '../../features/computerMove'

import { Players } from '../../constants/players'

import type { CellValue } from '../../entities/Cell/type' 
import { useTextWinner } from './useTextWinner'

type OptionsGameContextType = {
  vsComputer: boolean
  cells: CellValue[]
  turn: CellValue
  winner: CellValue
  text: string

  setTurn: Dispatch<SetStateAction<CellValue>>
  resetGame: () => void
  setVsComputer: Dispatch<SetStateAction<boolean>>
  setCells: Dispatch<SetStateAction<CellValue[]>>
}

export const OptionsGameContext = createContext<OptionsGameContextType>({} as OptionsGameContextType)

export const OptionsGameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vsComputer, setVsComputer] = useState(false)
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(null))
  const [turn, setTurn] = useState<CellValue>(Players.x)

  const winner = calculateWinner(cells)

  const {text} = useTextWinner({winner, cells, vsComputer})

  const resetGame = () => {
    setCells(Array(9).fill(null))
    setTurn(Players.x)
  }

  return (
    <OptionsGameContext.Provider value={{ vsComputer, cells, turn, winner, text, setCells, setTurn, setVsComputer, resetGame }}>
      {children}
    </OptionsGameContext.Provider>
  )
}
