import React from 'react'
import { useState } from 'react'

export default function List() {
  const [list, setList] = useState([
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Marta' },
    { id: 3, name: 'José' },
  ])
  return (
    <div>
      {list.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}
