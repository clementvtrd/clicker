import { ItemType } from "./items"

type Props = {
    item: ItemType
}

const Item = ({
    item
}: Props) => {
    const lines = 0
    const action = () => {}
    const {
        name,
        price,
    } = item;
    const available = lines < price;
    return (
        <>
            <span>{name} - {price}</span>
            <button
                disabled={!available}
                onClick={action}
            >Buy</button>
        </>
    )
}

export default Item