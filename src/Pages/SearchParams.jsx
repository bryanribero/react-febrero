import { useSearchParams } from 'react-router-dom'

export default function SearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActive = searchParams.get('filter') === 'active'

  return (
    <div>
      <h1>Search params</h1>
      <br />
      <br />
      <button
        onClick={() => {
          const newParams = new URLSearchParams(searchParams)
          newParams.set('filter', 'active')
          console.log(newParams.toString())
          setSearchParams(newParams)
        }}
      >
        Activar filtro
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          const newParams = new URLSearchParams(searchParams)
          newParams.delete('filter')
          setSearchParams(newParams)
        }}
      >
        Desactivar filtro
      </button>
      <div>
        {showActive ? (
          <p>Search params activado</p>
        ) : (
          <p>Search params desactivado</p>
        )}
      </div>
    </div>
  )
}
