import React from 'react'
import { useState } from 'react'

export default function Condicional3() {
  const [loggin, setLoggin] = useState(true)

  if (loggin) {
    return (
      <div>
        <p>Estas logeado</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>No estas logeado</p>
      </div>
    )
  }
}
