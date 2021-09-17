import { ItemType } from "../../clicker/items"



export enum ActionType {
  CLICK = 'game::CLICK',
  BUY_ITEM = 'game::BUY_ITEM',
  LOOP = 'game::LOOP'
}

export interface DefaultAction {
  type: ActionType.CLICK | ActionType.LOOP
}

export interface BuyAction {
  type: ActionType.BUY_ITEM
  item: ItemType
}

type Action = DefaultAction | BuyAction

// Action creators
export const click = (): Action => ({ type: ActionType.CLICK })
export const buyItem = (item: ItemType): BuyAction => ({ type: ActionType.BUY_ITEM, item })
export const loop = (): Action => ({ type: ActionType.LOOP })

type State = {
  lines: number,
  multiplier: number,
  items: ItemType[]
}

const INITIAL_STATE: State = {
  lines: 0,
  multiplier: 0,
  items: []
}

export const reducer = (state: State = INITIAL_STATE, action: Action) => {
  const { type } = action

  if (type === ActionType.LOOP) {
    return { ...state, lines: state.lines + state.multiplier }
  }

  if (type === ActionType.CLICK) {
    return { ...state, lines: state.lines + 1 }
  }

  if (type === ActionType.BUY_ITEM) {
    const { item: { price, multiplier }} = action
    const { items, lines, multiplier: previousMultiplier } = state

    return {
      ...state,
      lines: lines - price,
      multiplier: previousMultiplier + multiplier,
      items: [ ...items, action.item ]
    }
  }

  return state
}