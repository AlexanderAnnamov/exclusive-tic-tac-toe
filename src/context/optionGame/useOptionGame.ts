import { useContext } from 'react'
import { OptionsGameContext } from './OptionsGameContext'

export const useOptionsGame = () => {
  const context = useContext(OptionsGameContext)
  if (context === undefined) {
    throw new Error('useOptionsGame должен вызываться внутри OptionsGameProvider')
  }
  return context
}

export default useOptionsGame