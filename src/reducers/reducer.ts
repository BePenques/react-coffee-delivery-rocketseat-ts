import { produce } from 'immer'
import { ActionTypes, Actions } from '../contexts/actions'
import { CoffeeCardType, FormDataT } from '../types'
// import { OrderInfo } from '../../pages/Cart'

export interface Item {
  card: CoffeeCardType
  quantity: number
}

export interface FinishedOrder extends FormDataT {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: FinishedOrder[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart?.find(
          (item) => item.card.id === action.payload.data.card.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.data.quantity
        } else {
          draft?.cart?.push(action.payload.data)
        }
      })
    case ActionTypes.ADD_QTD_ORDER:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.card.id === action.payload.data.id,
        )

        if (itemToIncrement?.card.id) {
          itemToIncrement.quantity >= 1 && (itemToIncrement.quantity += 1)
        }
      })
    case ActionTypes.REDUCE_QTD_ORDER:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.card.id === action.payload.data.id,
        )

        if (itemToIncrement?.card.id) {
          itemToIncrement.quantity >= 2 && (itemToIncrement.quantity -= 1)
        }
      })

    case ActionTypes.REMOVE_ORDER:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.cart.findIndex(
          (item) => item.card.id === action.payload.data.id,
        )
        draft.cart.splice(itemToRemoveId, 1)
      })
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.data,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        // action.payload.navigate(`/order/${newOrder.id}/success`)
        action.payload.navigate(`/success/${newOrder.id}`)
      })

    // case ActionTypes.DECREMENT_ITEM_QUANTITY:
    //   return produce(state, (draft) => {
    //     const itemToDecrement = draft.cart.find(
    //       (item) => item.id === action.payload.itemId,
    //     )

    //     if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
    //       itemToDecrement.quantity -= 1
    //     }
    //   })

    // case ActionTypes.CHECKOUT_CART:
    //   return produce(state, (draft) => {
    //     const newOrder = {
    //       id: new Date().getTime(),
    //       items: state.cart,
    //       ...action.payload.order,
    //     }
    //     draft.orders.push(newOrder)
    //     draft.cart = []

    //     action.payload.callback(`/order/${newOrder.id}/success`)
    //   })

    default:
      return state
  }
}
