import { useDispatch } from "react-redux";
import { click } from "../store/modules/game";
import "./GitCoin.scss"
import Octocat from "./Octocat.png"

const GitCoin = () => {
    const dispatch = useDispatch()
    const handleClick = () => dispatch(click())
    return (
        <button className="gitcoin" onClick={handleClick}>
            <img src={Octocat} alt="Octocat"/>
        </button>
    )
}

export default GitCoin