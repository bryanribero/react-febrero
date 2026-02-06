import Hijo from './Hijo'

export default function Padre() {
  return (
    <div>
      <Hijo name="Bryan" age={27} />
      <Hijo name="Mauro" age={15} />
    </div>
  )
}
