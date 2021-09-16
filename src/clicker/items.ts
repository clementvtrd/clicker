export type ItemType = {
    name: string,
    price: number,
    multiplier: number
}

const items: ItemType[] = [
    {name: "keyboard", price: 25, multiplier: 0.25},
    {name: "mouse", price: 30, multiplier: 0.50},
    {name: "display", price: 100, multiplier: 2.5},
    {name: "processor", price: 250, multiplier: 10}
]

export default items