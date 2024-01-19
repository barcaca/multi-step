'use client'
import { DataForm } from '@/types/data'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface ContextProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  data: DataForm[]
  setData: Dispatch<SetStateAction<DataForm[]>>
}

const GlobalContext = createContext<ContextProps>({
  step: 0,
  setStep: (): number => 0,
  data: [],
  setData: (): DataForm[] => [],
})

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<DataForm[]>([
    {
      name: 'John Doe',
      email: 'john@example.com',
      tel: '123456789',
      plan: 1,
      plusAdd: 0,
      total: 10,
    },
  ])
  return (
    <GlobalContext.Provider value={{ step, setStep, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
