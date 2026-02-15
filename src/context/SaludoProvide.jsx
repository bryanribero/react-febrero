import { useState } from 'react'
import { SaludoContext } from './SaludoContext'

export default function SaludoProvide({ children }) {
  const [saludo, setSaludo] = useState('Hola')

  function handlerSaludo() {
    console.log('Se activo')
    setSaludo((prev) => (prev === 'Hola' ? 'Adios' : 'Hola'))
  }
  return (
    <SaludoContext.Provider value={{ saludo, handlerSaludo }}>
      {children}
    </SaludoContext.Provider>
  )
}
