import { NavigateFunction } from 'react-router-dom'
import { CoffeeCardType, FormDataT, Order } from '../types'

export enum ActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  CHECKOUT = 'CHECKOUT',
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
        data: CoffeeCardType
      }
    }
  | {
      type: ActionTypes.CHECKOUT
      payload: {
        data: FormDataT
        navigate: NavigateFunction
      }
    }
