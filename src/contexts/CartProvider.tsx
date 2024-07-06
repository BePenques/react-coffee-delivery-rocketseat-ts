import { createContext, ReactNode, useState } from 'react'
import { Order } from '../types'
// import { Order } from '../pages/Home/components/CoffeeCard'

interface CartContextType {
  cart: Order[]
  addCart: ({ card, quantity }: Order) => void
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

  return (
    <CartContext.Provider
      value={{
        addCart,

        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
