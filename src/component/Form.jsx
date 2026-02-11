import { useState } from 'react'

export default function Form() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })

  const handlerSubmit = (e) => {
    e.preventDefault()

    setUser({
      userName: '',
      password: '',
    })

    console.log('Formulario enviado')
  }

  const handlerUserName = (e) => {
    setUser({ ...user, userName: e.target.value })
  }

  const handlerPassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <h1>Formulario de usuario</h1>
        <fieldset>
          <label htmlFor="user">User</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="User name"
            value={user.userName}
            onChange={handlerUserName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handlerPassword}
          />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
