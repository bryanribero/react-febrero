import { useState } from 'react'

export default function Keys() {
  const [fruta, setFruta] = useState([])
  const [nextId, setNextId] = useState(0)
  const [input, setInput] = useState('')

  const agregarFruta = (e) => {
    e.preventDefault()

    setFruta((prev) => [
      ...prev,
      {
        id: nextId,
        nombre: input,
      },
    ])

    setNextId((prev) => prev + 1)
    setInput('')
  }

  const eliminarFruta = (id) => {
    setFruta(fruta.filter((e) => e.id !== id))
  }

  return (
    <div>
      <form onSubmit={agregarFruta}>
        <label htmlFor="fruta">
          Agregar fruta:
          <input
            type="text"
            id="fruta"
            name="fruta"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>

        <button>Enviar</button>
      </form>
      {fruta.map((e) => (
        <div>
          <p key={e.id}>{e.nombre}</p>
          <button onClick={() => eliminarFruta(e.id)}>x</button>
        </div>
      ))}
    </div>
  )
}
