import { useMemo } from "react";
import "./GitCoin.scss"
import Octocat from "./Octocat.png"

const GitCoin = () => {
    const count = 0
    const setCount = (value: number) => {}

    const handleClick = useMemo(
        () => () => setCount(count + 1),
        [count, setCount]
    );
    return (
        <button className="gitcoin" onClick={handleClick}>
            <img src={Octocat} alt="Octocat"/>
        </button>
    )
}

export default GitCoin