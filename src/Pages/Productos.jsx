import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Productos() {
  const { productos, addProductos } = useContext(ProductosContext)
  const [input, setInput] = useState('')

  const navigate = useNavigate()

  function handlerInput(e) {
    setInput(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault()

    addProductos(input)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          id="producto"
          name="producto"
          placeholder="Escribe tu producto..."
          onChange={handlerInput}
          value={input}
        />
        <hr />
        <hr />
        <button>Agregar</button>
      </form>

      <hr />
      <hr />

      <div>
        <h1>Productos</h1>
        {productos.map((producto) => (
          <p
            key={producto.id}
            onClick={() => navigate(`/productos/${producto.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {producto.name}
          </p>
        ))}
      </div>
    </div>
  )
}
