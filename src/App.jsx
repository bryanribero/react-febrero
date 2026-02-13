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
import List from './component/List.jsx'
import Comidas from './component/Comidas.jsx'
import FetchPokemon from './component/FetchPokemon.jsx'
import Form from './component/Form.jsx'
import FormControlled from './component/FormControlled.jsx'
import FormUncontrolled from './component/FormUncontrolled.jsx'

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <FormUncontrolled />
          {/* <FormControlled /> */}
          {/* <Form /> */}
          {/* <FetchPokemon /> */}
          {/* <Comidas />

          <Box></Box>

          <User></User>

          <Padre />
          <Condicional2 />
          <NameList />
          <List /> */}
        </UserProvider>
      </ThemeProvider>
    </>
  )
}

export default App
