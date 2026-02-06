import React from 'react'
import { useContext } from 'react'
import '../css/boxStyle.css'
import { ThemeContext } from '../Context/ThemeContext'

export default function Box() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <p className={theme}>Hola gente, este es un contexto</p>
      <button onClick={toggleTheme}>Cambio de clase</button>
    </div>
  )
}
