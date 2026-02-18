import { useState } from 'react'
import { ProductosContext } from './ProductosContext'

export default function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([])
  const [nextId, setNextId] = useState(0)

  function addProductos(producto) {
    setNextId((prev) => prev + 1)

    setProductos((prev) => [...prev, { id: nextId, name: producto }])
  }
  return (
    <ProductosContext.Provider value={{ productos, addProductos }}>
      {children}
    </ProductosContext.Provider>
  )
}
