import { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

export default function User() {
  let { name, age, handlerName, handlerAge } = useContext(UserContext)
  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="name"></label>
      <input type="text" id="name" placeholder="Name" onChange={handlerName} />

      <label htmlFor="age"></label>
      <input type="number" name="age" id="age" placeholder="age" onChange={handlerAge} />

      <div style={{ padding: '20px' }}>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    </div>
  )
}
