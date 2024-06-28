import {
  CheckoutMain,
  DeliveryPaymentSection,
  FormBox,
  PaymentMethodBox,
  PaymentBox,
  VerticalCardStyle,
  TotalPrices,
} from './styles'

export function Checkout() {
  return (
    <CheckoutMain>
      <DeliveryPaymentSection>
        <p>Complete seu pedido</p>
        <FormBox>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <form action="">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </FormBox>
        <PaymentMethodBox>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <button>Cartão de crédito</button>
          <button>cartão de débito</button>
          <button>dinheiro</button>
        </PaymentMethodBox>
      </DeliveryPaymentSection>
      <div>
        <p>Cafés selecionados</p>
        <PaymentBox>
          <VerticalCardStyle>
            {/* card vertical */}
            <img src={`/src/assets/coffees/expressoGelado.svg`} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <span>
                <button>qtde</button>
                <button>remover</button>
              </span>
            </div>
            <p>R$ 9,90</p>
          </VerticalCardStyle>
          <VerticalCardStyle>
            {/* card vertical */}
            <img src={`/src/assets/coffees/expressoGelado.svg`} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <span>
                <button>qtde</button>
                <button>remover</button>
              </span>
            </div>
            <p>R$ 9,90</p>
          </VerticalCardStyle>
          <TotalPrices>
            <span>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </span>
            <span>
              <p>Entrega</p>
              <p>R$ 29,70</p>
            </span>
            <span>
              <p>Total</p>
              <p>R$ 33,20</p>
            </span>
          </TotalPrices>
          <button>Confirmar Pedido</button>
        </PaymentBox>
      </div>
    </CheckoutMain>
  )
}
