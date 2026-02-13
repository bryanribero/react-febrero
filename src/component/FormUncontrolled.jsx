import { useRef } from 'react'

export default function FormUncontrolled() {
  const nameRef = useRef()
  const checkboxRef = useRef(null)

  function handlerSubmit(e) {
    e.preventDefault()

    console.log(`${nameRef.current.value}, ${checkboxRef.current.checked}`)
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <h1>Form Uncontrolled</h1>
        <fieldset>
          <label htmlFor="name">
            Name: <input type="text" name="name" id="name" ref={nameRef} />
          </label>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor="condition">
            I accept the terms and conditions{' '}
            <input
              type="checkbox"
              name="condition"
              id="condition"
              ref={checkboxRef}
            />
          </label>
        </fieldset>
        <br />
        <button>Send</button>
      </form>
    </>
  )
}
