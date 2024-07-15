import { TotalPricesLayout, PriceLine, PriceLineTotal } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function TotalPrices() {
  const { cart } = useContext(CartContext)

  const vlrTotalItens = cart.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.card.price * currentItem.quantity)
  }, 0)

  const vlrTotal = cart.length > 0 ? vlrTotalItens + 3.5 : 0

  return (
    <TotalPricesLayout>
      <PriceLine>
        <p>Total de itens</p>

        <span>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(vlrTotalItens)}
        </span>
      </PriceLine>
      <PriceLine>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceLine>
      <PriceLineTotal>
        <p>Total</p>

        <p>
          {' '}
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(vlrTotal)}
        </p>
      </PriceLineTotal>
    </TotalPricesLayout>
  )
}
