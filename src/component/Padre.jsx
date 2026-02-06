import Hijo from './Hijo'
import HijoNew from './HijoNew'

export default function Padre() {
  return (
    <div>
      <Hijo name="Bryan" age={27} />
      <Hijo name="Mauro" age={15} />

      <HijoNew name="Maria" age={33} />
    </div>
  )
}
