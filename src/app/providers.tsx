// src/app/providers.tsx
import React, { ReactNode } from 'react'
import { OptionsGameProvider } from '../context/optionGame/OptionsGameContext'

type Props = { children: ReactNode }

export const Providers: React.FC<Props> = ({ children }) => (
  <OptionsGameProvider>
    {children}
  </OptionsGameProvider>
)
