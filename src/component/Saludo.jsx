import { useContext } from 'react'
import { SaludoContext } from '../context/SaludoContext'

export default function Saludo() {
  const { saludo, handlerSaludo } = useContext(SaludoContext)
  return (
    <div>
      {saludo}
      {saludo === 'Hola' ? (
        <button onClick={handlerSaludo}>Despedirse</button>
      ) : (
        <button onClick={handlerSaludo}>Saludar</button>
      )}
    </div>
  )
}
