import {
  CheckoutMain,
  DeliveryPaymentSection,
  FormBox,
  PaymentMethodSection,
  PaymentBox,
  VerticalCardStyle,
  TotalPrices,
  ButtonPaymentMethodBox,
  ResumeSection,
  PriceLine,
  PriceLineTotal,
  ButtonConfirmOrder,
  TrashButton,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react'
import { InputNumber } from '../../components/InputNumber'
import { NavLink } from 'react-router-dom'

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
          <form action="">
            <input type="text" name="CEP" placeholder="CEP" />
            <input type="text" name="Rua" placeholder="Rua" />
            <input type="text" name="Numero" placeholder="Número" />
            <input type="text" name="Complemento" placeholder="Complemento" />
            <input type="text" name="Bairro" placeholder="Bairro" />
            <input type="text" name="Cidade" placeholder="Cidade" />
            <input type="text" name="UF" placeholder="UF" />
          </form>
        </FormBox>
        <PaymentMethodSection>
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
        </PaymentMethodSection>
      </DeliveryPaymentSection>
      <ResumeSection>
        <h1>Cafés selecionados</h1>
        <PaymentBox>
          <VerticalCardStyle>
            {/* card vertical */}
            <img src={`/src/assets/coffees/expressoGelado.svg`} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <span>
                <InputNumber />
                <TrashButton>
                  <Trash size={16} color="#8047F8" />
                  REMOVER
                </TrashButton>
              </span>
            </div>
            <h3>R$ 9,90</h3>
          </VerticalCardStyle>
          <VerticalCardStyle>
            {/* card vertical */}
            <img src={`/src/assets/coffees/expressoGelado.svg`} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <span>
                <InputNumber />
                <TrashButton>
                  <Trash size={16} color="#8047F8" />
                  REMOVER
                </TrashButton>
              </span>
            </div>
            <h3>R$ 9,90</h3>
          </VerticalCardStyle>
          <TotalPrices>
            <PriceLine>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </PriceLine>
            <PriceLine>
              <p>Entrega</p>
              <span>R$ 29,70</span>
            </PriceLine>
            <PriceLineTotal>
              <p>Total</p>
              <p>R$ 33,20</p>
            </PriceLineTotal>
          </TotalPrices>
          <NavLink to="/success" title="Home">
            <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
          </NavLink>
        </PaymentBox>
      </ResumeSection>
    </CheckoutMain>
  )
}
