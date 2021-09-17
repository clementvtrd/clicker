import { useSelector } from "react-redux"
import "./Display.scss"
import { RootState } from "../store/store"

function selectLines(store: RootState): number
{
    return store.game.lines
}

function Display() {
    const lines = useSelector(selectLines)
    return <p className="counter">{Math.floor(lines)} lines</p>
}

export default Display