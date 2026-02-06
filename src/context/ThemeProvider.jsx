import { useState } from 'react'
import { ThemeContext } from './ThemeContext.jsx'

export function ThemeProvider({ children }) {
  const [theme, SetTheme] = useState('Light')

  function toggleTheme() {
    SetTheme((prev) => (prev === 'Light' ? 'Black' : 'Light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
