import { createContext, ReactNode, useReducer } from 'react'
import { Order, CoffeeCardType } from '../types'
import { Actions, updateOrderAction } from './actions'

interface CartContextType {
  cart: Order[]
  addCart: ({ card, quantity }: Order) => void
  addQuantityOfOrder: (card: CoffeeCardType) => void
  reduceQuantityOfOrder: (card: CoffeeCardType) => void
  removeOrder: (card: CoffeeCardType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  // const [cart, setCart] = useState<Order[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartState, dispatch] = useReducer(
    (state: Order[], action: Actions) => {
      if (action.type === 'ADD_NEW_ORDER') {
        return [...state, action.payload.data]
      }
      if (action.type === 'REMOVE_ORDER') {
        return [...state, action.payload.data]
      }
      if (action.type === 'UPDATE_ORDER') {
        return [
          ...state,
          state.map((item) => {
            if (item.card.id === action.payload.data.card.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.data.quantity,
              }
            }
            return { ...item }
          }),
        ]
      }
      if (action.type === 'ADD_QTD_ORDER') {
        console.log('poxa vida hein ')
        return [
          ...state,
          state.map((item) => {
            if (item.card.id === action.payload.data.id) {
              return {
                ...item,
                quantity:
                  item.quantity >= 1 ? (item.quantity += 1) : item.quantity,
              }
            }

            return item
          }),
        ]
      }
      if (action.type === 'REDUCE_QTD_ORDER') {
        return [
          ...state,
          state.map((item) => {
            if (item.card.id === action.payload.data.id) {
              return {
                ...item,
                quantity:
                  item.quantity >= 2 ? (item.quantity -= 1) : item.quantity,
              }
            }

            return { ...item }
          }),
        ]
      }

      return state
    },
    [],
  )

  const { cart, setCart } = cartState

  function addCart({ card, quantity }: Order) {
    const exists = cart.find((item) => item.card.id === card.id)

    if (exists) {
      // const updateOrder = cart.map((item) => {
      //   if (item.card.id === card.id) {
      //     return { ...item, quantity: item.quantity + quantity }
      //   }
      //   return { ...item }
      // })
      // setCart(updateOrder)
      // ----------------------------------------------------->here down
      const newOrder: Order = {
        card,
        quantity,
      }
      // dispatch({
      //   type: 'UPDATE_ORDER',
      //   payload: {
      //     newOrder,
      //   },
      // })
      dispatch(updateOrderAction(newOrder))
    } else {
      const newOrder: Order = {
        card,
        quantity,
      }
      dispatch({
        type: 'ADD_NEW_ORDER',
        payload: {
          newOrder,
        },
      })
      // const newOrder: Order = {
      //   card,
      //   quantity,
      // }
      // setCart((state) => [...state, newOrder])
    }
  }

  function addQuantityOfOrder(card: CoffeeCardType) {
    console.log('ué')
    dispatch({
      type: 'ADD_QTD_ORDER',
      payload: {
        card,
      },
    })
    // const updateOrder = cart.map((item) => {
    //   if (item.card.id === card.id) {
    //     return {
    //       ...item,
    //       quantity: item.quantity >= 1 ? (item.quantity += 1) : item.quantity,
    //     }
    //   }

    //   return { ...item }
    // })
    // setCart(updateOrder)
  }

  function reduceQuantityOfOrder(card: CoffeeCardType) {
    dispatch({
      type: 'REDUCE_QTD_ORDER',
      payload: {
        card,
      },
    })
    // const updateOrder = cart.map((item) => {
    //   if (item.card.id === card.id) {
    //     return {
    //       ...item,
    //       quantity: item.quantity >= 2 ? (item.quantity -= 1) : item.quantity,
    //     }
    //   }

    //   return { ...item }
    // })
    // setCart(updateOrder)
  }

  function removeOrder(card: CoffeeCardType) {
    const filteredCart = cart.filter((item) => item.card.id !== card.id)
    // setCart(filteredCart)
    dispatch({
      type: 'REMOVE_ORDER',
      payload: {
        filteredCart,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        addCart,
        addQuantityOfOrder,
        reduceQuantityOfOrder,
        removeOrder,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
