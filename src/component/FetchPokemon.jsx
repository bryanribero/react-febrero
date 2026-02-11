import { useState } from 'react'
import { useEffect } from 'react'

export default function FetchPokemon() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

      if (!res.ok) {
        throw new Error('Error en la peticion')
      }

      const json = await res.json()
      setData(json)
    }

    fetchData()
  }, [])
  return (
    <div>
      <p>{data?.abilities[0].ability.name}</p>
    </div>
  )
}
