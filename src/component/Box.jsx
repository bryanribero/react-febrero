import React from 'react'
import { useContext } from 'react'
import Style from '../css/boxStyle.module.css'
import { ThemeContext } from '../context/ThemeContext'

export default function Box() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <p className={Style[theme]}>Hola gente, este es un contexto</p>
      <button onClick={toggleTheme}>Cambio de clase</button>
    </div>
  )
}
