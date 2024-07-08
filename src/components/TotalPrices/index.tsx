import { TotalPricesLayout, PriceLine, PriceLineTotal } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function TotalPrices() {
  const { valorTotalItens, valorTotal } = useContext(CartContext)

  return (
    <TotalPricesLayout>
      <PriceLine>
        <p>Total de itens</p>
        {/* <span>R$ {valorTotalItens}</span> */}
        <span>
          R${' '}
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(valorTotalItens)}
        </span>
      </PriceLine>
      <PriceLine>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceLine>
      <PriceLineTotal>
        <p>Total</p>
        {/* <p>R$ {valorTotal}</p> */}
        <p>
          {' '}
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(valorTotal)}
        </p>
      </PriceLineTotal>
    </TotalPricesLayout>
  )
}
