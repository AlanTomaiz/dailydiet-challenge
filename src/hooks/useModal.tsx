import { Modal } from '@components/Modal'
import { createContext, ReactNode, useContext, useState } from 'react'

type Actions = {
  resolve: (value?: unknown) => void
  reject: (value?: unknown) => void
}

type ContextType = {
  actions: Actions
  isOpen: boolean
  execute: () => Promise<boolean>
}

const ModalContext = createContext<ContextType>({} as ContextType)

type ProviderProps = {
  children: ReactNode
}

export function ModalProvider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [actions, setActions] = useState<Actions>({
    resolve: () => {},
    reject: () => {}
  })

  const execute = () => {
    const promise = new Promise((resolve, reject) => {
      setActions({ resolve, reject })
      setIsOpen(true)
    })

    return promise.then(
      (): boolean => {
        setIsOpen(false)
        return true
      },
      (): boolean => {
        setIsOpen(false)
        return false
      }
    )
  }

  return (
    <ModalContext.Provider value={{ actions, isOpen, execute }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  return context
}
