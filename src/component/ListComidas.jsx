import React from 'react'
import { useEffect } from 'react'

export default function ListComidas({ comidas }) {
  useEffect(() => {
    console.log(`La lista de comidas cambio: ${comidas}`)

    return () => console.log(`Se desmonto el componente ListComidas`)
  }, [comidas])

  return (
    <ul>
      {comidas.map((comida) => (
        <li key={comida.id}>{comida.name}</li>
      ))}
    </ul>
  )
}
