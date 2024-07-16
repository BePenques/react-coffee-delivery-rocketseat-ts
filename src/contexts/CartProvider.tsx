import { createContext, ReactNode, useEffect, useState } from 'react'
import { Order, CoffeeCardType } from '../types'

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
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-state-1.0.0',
  )

  const [cart, setCart] = useState<Order[]>(
    storedStateAsJSON ? JSON.parse(storedStateAsJSON) : [],
  )

  function addCart({ card, quantity }: Order) {
    const exists = cart.find((item) => item.card.id === card.id)

    if (exists) {
      const updateOrder = cart.map((item) => {
        if (item.card.id === card.id) {
          return { ...item, quantity: item.quantity + quantity }
        }

        return { ...item }
      })
      setCart(updateOrder)
    } else {
      const newOrder: Order = {
        card,
        quantity,
      }

      setCart((state) => [...state, newOrder])
    }
  }

  function addQuantityOfOrder(card: CoffeeCardType) {
    const updateOrder = cart.map((item) => {
      if (item.card.id === card.id) {
        return {
          ...item,
          quantity: item.quantity >= 1 ? (item.quantity += 1) : item.quantity,
        }
      }

      return { ...item }
    })
    setCart(updateOrder)
  }

  function reduceQuantityOfOrder(card: CoffeeCardType) {
    const updateOrder = cart.map((item) => {
      if (item.card.id === card.id) {
        return {
          ...item,
          quantity: item.quantity >= 2 ? (item.quantity -= 1) : item.quantity,
        }
      }

      return { ...item }
    })
    setCart(updateOrder)
  }

  function removeOrder(card: CoffeeCardType) {
    const filteredCart = cart.filter((item) => item.card.id !== card.id)
    setCart(filteredCart)
    console.log(cart)
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
