import { useState } from 'react'

export default function FormControlled() {
  const [name, setName] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  function handlerChecked() {
    setIsChecked((prev) => !prev)
  }

  function handlerName(e) {
    setName(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault()

    alert(
      `Nombre enviado: ${name}, Se acepto los terminos y condiciones? ${isChecked ? 'Si' : 'No'}`
    )
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <h1>Formulario</h1>
        <fieldset>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              onChange={handlerName}
              value={name}
            />
          </label>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor="condition">
            I accept the terms and conditions
            <input
              type="checkbox"
              name="condition"
              id="condition"
              value={isChecked}
              onChange={handlerChecked}
            />
          </label>
        </fieldset>
        <br />
        <button>Send</button>
      </form>
    </>
  )
}
