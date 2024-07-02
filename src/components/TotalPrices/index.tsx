import {
  TotalPricesLayout,
  PriceLine,
  PriceLineTotal,
  ButtonConfirmOrder,
} from './styles'

import { NavLink } from 'react-router-dom'

export function TotalPrices() {
  return (
    <TotalPricesLayout>
      <PriceLine>
        <p>Total de itens</p>
        <span>R$ 29,70</span>
      </PriceLine>
      <PriceLine>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </PriceLine>
      <PriceLineTotal>
        <p>Total</p>
        <p>R$ 33,20</p>
      </PriceLineTotal>

      <NavLink to="/success" title="Home">
        <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
      </NavLink>
    </TotalPricesLayout>
  )
}
