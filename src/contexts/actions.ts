/* eslint-disable no-unused-vars */

// import { NavigateFunction } from 'react-router-dom'
// import { OrderInfo } from '../../pages/Cart'
// import { Item } from './reducer'
import { CoffeeCardType, Order } from '../types'

export enum ActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  UPDATE_ORDER = 'UPDATE_ORDER',
  ADD_QTD_ORDER = 'ADD_QTD_ORDER',
  REDUCE_QTD_ORDER = 'REDUCE_QTD_ORDER',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ORDER
      payload: {
        data: Order
      }
    }
  | {
      type: ActionTypes.ADD_QTD_ORDER | ActionTypes.REDUCE_QTD_ORDER
      payload: {
        data: CoffeeCardType
      }
    }
  | {
      type: ActionTypes.REMOVE_ORDER
      payload: {
        data: Order[]
      }
    }
  | {
      type: ActionTypes.UPDATE_ORDER
      payload: {
        data: Order
      }
    }

// export function updateOrderAction(item: Order) {
//   return {
//     type: ActionTypes.UPDATE_ORDER,
//     payload: {
//       data: item,
//     },
//   } satisfies Actions
// }
// export function addItemAction(item: Item) {
//   return {
//     type: ActionTypes.ADD_ITEM,
//     payload: {
//       item,
//     },
//   } satisfies Actions
// }

// export function removeItemAction(itemId: Item['id']) {
//   return {
//     type: ActionTypes.REMOVE_ITEM,
//     payload: {
//       itemId,
//     },
//   } satisfies Actions
// }

// export function incrementItemQuantityAction(itemId: Item['id']) {
//   return {
//     type: ActionTypes.INCREMENT_ITEM_QUANTITY,
//     payload: {
//       itemId,
//     },
//   } satisfies Actions
// }

// export function decrementItemQuantityAction(itemId: Item['id']) {
//   return {
//     type: ActionTypes.DECREMENT_ITEM_QUANTITY,
//     payload: {
//       itemId,
//     },
//   } satisfies Actions
// }

// export function checkoutCartAction(
//   order: OrderInfo,
//   callback: NavigateFunction,
// ) {
//   return {
//     type: ActionTypes.CHECKOUT_CART,
//     payload: {
//       order,
//       callback,
//     },
//   } satisfies Actions
// }
