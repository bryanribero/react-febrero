import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/ThemeProvider.jsx'
import Box from './component/Box.jsx'
import './App.css'
import { UserProvider } from './context/UserProvider.jsx'
import User from './component/User.jsx'
import Padre from './component/Padre.jsx'
import Condicional from './component/Condicional.jsx'
import Condicional2 from './component/Condicional2.jsx'
import Array from './component/NameList.jsx'
import NameList from './component/NameList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>

          <Box></Box>

          <User></User>

          <Padre />
          <Condicional2 />
          <NameList />
        </UserProvider>
      </ThemeProvider>
    </>
  )
}

export default App
