import {
  CheckoutMain,
  DeliveryPaymentSection,
  FormBox,
  PaymentBox,
  ResumeSection,
} from './styles'
import { MapPinLine } from 'phosphor-react'

import { CheckoutForm } from '../../components/CheckoutForm'
import { PaymentMethodSection } from '../../components/PaymentMethodSection'
import { VerticalCard } from '../../components/VerticalCard'
import { TotalPrices } from '../../components/TotalPrices'

export function Checkout() {
  return (
    <CheckoutMain>
      <DeliveryPaymentSection>
        <h1>Complete seu pedido</h1>
        <FormBox>
          <div>
            <MapPinLine size={22} color="#C47F17" />
            <span>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </div>
          <CheckoutForm></CheckoutForm>
        </FormBox>
        <PaymentMethodSection></PaymentMethodSection>
      </DeliveryPaymentSection>
      <ResumeSection>
        <h1>Cafés selecionados</h1>
        <PaymentBox>
          <VerticalCard></VerticalCard>
          <TotalPrices></TotalPrices>
        </PaymentBox>
      </ResumeSection>
    </CheckoutMain>
  )
}
