import { createContext, ReactNode, useState } from 'react'
import { Order, CoffeeCardType } from '../types'

interface CartContextType {
  cart: Order[]
  addCart: ({ card, quantity }: Order) => void

  addQuantityOfOrder: (card: CoffeeCardType) => void
  reduceQuantityOfOrder: (card: CoffeeCardType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Order[]>([])

  function addCart({ card, quantity }: Order) {
    console.log('adicionar no carrinho')
    console.log(cart)
    // verificar se o café já existe no carrinho
    // se existir adiciona a nova quantidade
    // se não existir cria o café com a quantidade

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
        return { ...item, quantity: (item.quantity += 1) }
      }

      return { ...item }
    })
    setCart(updateOrder)
  }

  function reduceQuantityOfOrder(card: CoffeeCardType) {
    const updateOrder = cart.map((item) => {
      if (item.card.id === card.id) {
        return { ...item, quantity: (item.quantity -= 1) }
      }

      return { ...item }
    })
    setCart(updateOrder)
  }

  return (
    <CartContext.Provider
      value={{
        addCart,
        addQuantityOfOrder,
        reduceQuantityOfOrder,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
