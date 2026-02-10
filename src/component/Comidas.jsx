import React from 'react'
import { useState } from 'react'
import ListComidas from './ListComidas'

export default function Comidas() {
  const [comida, setComida] = useState([
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Macarrones' },
  ])

  function addComida() {
    const newComida = { id: comida.length + 1, name: 'Nueva comida' }
    setComida([...comida, newComida])
  }

  function deleteComida() {
    setComida((prev) => prev.slice(0, -1))
  }
  return (
    <div>
      <h2>Lista de comidas</h2>
      <ListComidas comidas={comida} />
      <button onClick={addComida}>Add comida</button>
      <button onClick={deleteComida}>Delete comida</button>
    </div>
  )
}
