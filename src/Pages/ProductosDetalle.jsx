import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { useParams } from 'react-router-dom'

export default function ProductosDetalle() {
  const { productos } = useContext(ProductosContext)
  const { id } = useParams()

  const producto = productos.find((p) => p.id == id)

  return (
    <div>
      <h1>Producto en detalle</h1>
      <hr />
      <br />
      <p>Id: {producto.id}</p>
      <p>Nombre: {producto.name}</p>
    </div>
  )
}
