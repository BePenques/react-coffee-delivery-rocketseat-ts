import { PaymentMethodSectionStyle, ButtonPaymentMethodBox } from './styles'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export function PaymentMethodSection() {
  return (
    <PaymentMethodSectionStyle>
      <div>
        <CurrencyDollar size={22} color="#8047F8" />
        <span>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </span>
      </div>
      <ButtonPaymentMethodBox>
        <button>
          {' '}
          <CreditCard size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </button>
        <button>
          {' '}
          <Bank size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </button>
        <button>
          {' '}
          <Money size={16} color="#8047F8" />
          DINHEIRO
        </button>
      </ButtonPaymentMethodBox>
    </PaymentMethodSectionStyle>
  )
}
