import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Order, CoffeeCardType, FormDataT } from '../types'
import { cartReducer, FinishedOrder } from '../reducers/reducer'
import { ActionTypes } from './actions'
import { useNavigate } from 'react-router-dom'

interface CartContextType {
  cart: Order[]
  addCart: ({ card, quantity }: Order) => void
  addQuantityOfOrder: (card: CoffeeCardType) => void
  reduceQuantityOfOrder: (card: CoffeeCardType) => void
  removeOrder: (card: CoffeeCardType) => void
  checkout: (data: FormDataT) => void
  orders: FinishedOrder[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate()
  // const storedStateAsJSON = localStorage.getItem(
  //   '@coffee-delivery:cart-state-1.0.0',
  // )

  // const [cart, setCart] = useState<Order[]>(
  //   storedStateAsJSON ? JSON.parse(storedStateAsJSON) : [],
  // )

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const { cart, orders } = cartState

  function addCart({ card, quantity }: Order) {
    console.log(cart)
    // const exists = cart.find((item) => item.card.id === card.id)

    // if (exists) {
    //   dispatch({
    //     type: ActionTypes.UPDATE_ORDER,
    //     payload: {
    //       data: { card, quantity },
    //     },
    //   })
    //   const updateOrder = cart.map((item) => {
    //     if (item.card.id === card.id) {
    //       return { ...item, quantity: item.quantity + quantity }
    //     }
    //     return { ...item }
    //   })
    //   setCart(updateOrder)
    // } else {
    dispatch({
      type: ActionTypes.ADD_ORDER,
      payload: {
        data: { card, quantity },
      },
    })
    //   const newOrder: Order = {
    //     card,
    //     quantity,
    //   }
    //   setCart((state) => [...state, newOrder])
    // }
  }

  function addQuantityOfOrder(card: CoffeeCardType) {
    // const updateOrder = cart.map((item) => {
    //   if (item.card.id === card.id) {
    //     return {
    //       ...item,
    //       quantity: item.quantity >= 1 ? (item.quantity += 1) : item.quantity,
    //     }
    //   }

    //   return { ...item }
    // })
    dispatch({
      type: ActionTypes.ADD_QTD_ORDER,
      payload: {
        data: card,
      },
    })
    // setCart(updateOrder)
  }

  function reduceQuantityOfOrder(card: CoffeeCardType) {
    // const updateOrder = cart.map((item) => {
    //   if (item.card.id === card.id) {
    //     return {
    //       ...item,
    //       quantity: item.quantity >= 2 ? (item.quantity -= 1) : item.quantity,
    //     }
    //   }

    //   return { ...item }
    // })
    dispatch({
      type: ActionTypes.REDUCE_QTD_ORDER,
      payload: {
        data: card,
      },
    })
    // setCart(updateOrder)
  }

  function removeOrder(card: CoffeeCardType) {
    // const filteredCart = cart.filter((item) => item.card.id !== card.id)
    // setCart(filteredCart)
    dispatch({
      type: ActionTypes.REMOVE_ORDER,
      payload: {
        data: card,
      },
    })
  }

  function checkout(data: FormDataT) {
    console.log(data)

    dispatch({
      type: ActionTypes.CHECKOUT,
      payload: {
        data,
        navigate,
      },
    })
  }

  useEffect(() => {
    if (cart) {
      const stateJSON = JSON.stringify(cart)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        addCart,
        addQuantityOfOrder,
        reduceQuantityOfOrder,
        removeOrder,
        cart,
        checkout,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
