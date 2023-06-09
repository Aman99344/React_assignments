import { useContext } from "react"
import mySecContext from "./Contex2"

const Bcomp = () => {

    let secData = useContext(mySecContext)
  return (
    <div>
        <p>{secData}</p>
    </div>
  )
}

export default Bcomp