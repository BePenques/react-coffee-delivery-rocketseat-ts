import { createContext, ReactNode } from 'react'
// import { Order } from '../pages/Home/components/CoffeeCard'

interface CartContextType {
  //   cart: Order[]
  // addItem: (item: Item) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider
      value={
        {
          // addItem,
          // cart,
          // orders,
          // decrementItemQuantity,
          // incrementItemQuantity,
          // removeItem,
          // checkout,
        }
      }
    >
      {children}
    </CartContext.Provider>
  )
}
