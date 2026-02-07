import React from 'react'
import { useState } from 'react'

export default function Condicional2() {
  const [loggin, setLoggin] = useState(true)

  return (
    <div>
      {/* Utilizamos el operador logico */}
      {loggin && <p>Estas logeado</p>}
      {!loggin && <p>No estas logeado</p>}
      <button onClick={() => setLoggin((prev) => !prev)}>Loggin</button>
    </div>
  )
}
