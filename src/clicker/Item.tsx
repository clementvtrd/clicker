import { useSelector, useDispatch } from "react-redux"
import { buyItem } from "../store/modules/game"
import { RootState } from "../store/store"

import { ItemType } from "./items"

type Props = {
    item: ItemType
}

function selectLines(store: RootState) {
    return store.game.lines
}

const Item = ({
    item
}: Props) => {
    const dispatch = useDispatch()
    const lines = useSelector(selectLines)
    const handleClick = () => dispatch(buyItem(item))
    const {
        name,
        price,
    } = item;
    const available = lines >= price;
    return (
        <>
            <span>{name} - {price}</span>
            <button
                disabled={!available}
                onClick={handleClick}
            >Buy</button>
        </>
    )
}

export default Item