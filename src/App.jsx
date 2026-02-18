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
import SaludoProvide from './context/SaludoProvide.jsx'
import Saludo from './component/Saludo.jsx'
import Keys from './component/Keys.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import FrutasPage from './Pages/FrutasPage.jsx'
import Productos from './Pages/Productos.jsx'
import ProductosProvider from './context/ProductosProvider.jsx'
import ProductosDetalle from './Pages/ProductosDetalle.jsx'

function App() {
  return (
    <>
      <ProductosProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frutas" element={<FrutasPage />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<ProductosDetalle />} />
        </Routes>
      </ProductosProvider>
    </>
  )
}

export default App
