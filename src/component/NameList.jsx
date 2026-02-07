import { useState } from 'react'

export default function NameList() {
  const [arr, setArr] = useState(['pedro', 'Jose', 'Carmen'])

  function eliminarItem(itemAEliminar) {
    setArr((prev) => prev.filter((_, index) => index !== itemAEliminar))
  }
  return (
    <div>
      {arr.map((name, index) => (
        <div key={index}>
          <p>{name}</p>
          <button onClick={() => eliminarItem(index)}>X</button>
        </div>
      ))}
    </div>
  )
}
