import GitCoin from "./GitCoin"
import Display from "./Display"
import Shop from "./Shop"
import "./Clicker.scss"

function Clicker() {
    return (
        <div className="clicker">
            <Display />
            <GitCoin />
            <Shop/>
        </div>
    )
}

export default Clicker