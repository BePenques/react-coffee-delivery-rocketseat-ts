import { createContext, ReactNode, useState } from 'react'
import { Order, CoffeeCardType } from '../types'

interface CartContextType {
  cart: Order[]
  addCart: ({ card, quantity }: Order) => void
  valorTotalItens: number
  valorTotal: number
  addQuantityOfOrder: (card: CoffeeCardType) => void
  reduceQuantityOfOrder: (card: CoffeeCardType) => void
  removeOrder: (card: CoffeeCardType) => void
  calculateTotal: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Order[]>([])
  const [valorTotalItens, setValorTotalItens] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)

  function calculateTotal() {
    const vlrTotal = cart.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.card.price * currentItem.quantity)
    }, 0)

    setValorTotalItens(vlrTotal)
    setValorTotal(vlrTotal + 3.5)
  }

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
    calculateTotal()
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
    calculateTotal()
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
    calculateTotal()
  }

  function removeOrder(card: CoffeeCardType) {
    const filteredCart = cart.filter((item) => item.card.id !== card.id)
    setCart(filteredCart)
    calculateTotal()
  }

  return (
    <CartContext.Provider
      value={{
        addCart,
        addQuantityOfOrder,
        reduceQuantityOfOrder,
        removeOrder,
        cart,
        valorTotalItens,
        valorTotal,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
