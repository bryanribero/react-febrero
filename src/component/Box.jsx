import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import '../css/boxStyle.css'

export default function Box() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <p className={theme}>Hola gente, este es un contexto</p>
      <button onClick={toggleTheme}>Cambio de clase</button>
    </div>
  )
}
