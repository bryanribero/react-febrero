import { useState } from 'react'
import { UserContext } from './UserContext.js'

export function UserProvider({ children }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState()

  function handlerName(e) {
    setName(e.target.value)
  }

  function handlerAge(e) {
    setAge(e.target.value)
  }

  return <UserContext.Provider value={{ name, age, handlerName, handlerAge }}>{children}</UserContext.Provider>
}
