
import items, { ItemType } from "./items"
import Item from "./Item"
import { useEffect, useMemo } from "react"

function Shop() {
    const holdItems: ItemType[] = []
    const setCount = (n: number) => {}
    const count = 0

    const multiplier = useMemo(
        () => holdItems.reduce(
            (total, { multiplier }) => total + multiplier,
            0
        ),
        []
    )

    useEffect(
        () => {
            const interval = setInterval(() => {
                console.log("setinterval");
                setCount(count + multiplier)
            }, 250)
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