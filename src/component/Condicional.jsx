import { useState } from 'react'

export default function Condicional() {
  const [loggin, setLoggin] = useState(true)

  return (
    <div>
      {/* usando el Operador ternario */}
      {loggin ? <p>Estas logeado</p> : <p>No estas logeado</p>}
      <button onClick={() => setLoggin((prev) => !prev)}>Loggin</button>
    </div>
  )
}
