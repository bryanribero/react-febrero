import { NavLink } from 'react-router-dom'
import FrutasPage from './FrutasPage'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to={'/frutas'}>
        <button>Frutas</button>
      </NavLink>
    </div>
  )
}
