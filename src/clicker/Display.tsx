import { useSelector } from "react-redux"
import "./Display.scss"

function Display() {
    const store = useSelector((store) => store)
    console.log("store:", store);
    const count = 0
    return <p className="counter">{Math.floor(count)} lines</p>
}

export default Display