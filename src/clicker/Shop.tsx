
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import items from "./items"
import Item from "./Item"
import { loop } from "../store/modules/game"

function Shop() {
    const dispatch = useDispatch()

    useEffect(
        () => {
            const interval = setInterval(() => {
                dispatch(loop())
            }, 500)
            return () => clearInterval(interval)
        }
    )

    return (
        <ul>
        {
            items.map((item, i) => <li key={i}>
                <Item item={item}/>
            </li>)
        }
        </ul>
    )
}

export default Shop