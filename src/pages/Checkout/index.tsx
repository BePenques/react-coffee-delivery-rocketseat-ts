import {
  CheckoutMain,
  DeliveryPaymentSection,
  FormBox,
  PaymentBox,
  ResumeSection,
  ButtonConfirmOrder,
  FormContainer,
  PaymentMethodSectionStyle,
  ButtonPaymentMethodBox,
  ErrorMessage,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { VerticalCard } from '../../components/VerticalCard'
import { TotalPrices } from '../../components/TotalPrices'
import FormField from '../../components/FormField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormDataT } from '../../types'
import FormFieldRadio from '../../components/FormFieldRadio'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

const newCheckoutFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, { message: 'CEP precisa ter no minimo 8 caracteres' }),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().min(1, 'Informe o Numero'),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(2, 'Informe o Estado').max(2),
  complemento: zod.string(),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export function Checkout() {
  // const navigate = useNavigate()

  const { cart, checkout } = useContext(CartContext)

  // function onSubmit(data: FormData) {
  function onSubmit(data: FormDataT) {
    // function onSubmit() {
    // navigate(`/success`)
    checkout(data)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

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
          <FormContainer id="formCheckout" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              type="text"
              placeholder="CEP"
              name="cep"
              register={register}
              error={errors.cep}
            />
            <FormField
              type="text"
              placeholder="Rua"
              name="rua"
              register={register}
              error={errors.rua}
            />
            <FormField
              type="text"
              placeholder="Numero"
              name="numero"
              register={register}
              error={errors.numero}
            />
            <FormField
              type="text"
              placeholder="Complemento"
              name="complemento"
              register={register}
              error={errors.complemento}
            />
            <FormField
              type="text"
              placeholder="Bairro"
              name="bairro"
              register={register}
              error={errors.bairro}
            />
            <FormField
              type="text"
              placeholder="Cidade"
              name="cidade"
              register={register}
              error={errors.cidade}
            />
            <FormField
              type="text"
              placeholder="UF"
              name="uf"
              register={register}
              error={errors.uf}
            />
          </FormContainer>
        </FormBox>
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
            <FormFieldRadio
              isSelected={selectedPaymentMethod === 'credit'}
              type="radio"
              name="paymentMethod"
              value="credit"
              register={register}
              error={errors.paymentMethod}
            >
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </FormFieldRadio>
            <FormFieldRadio
              isSelected={selectedPaymentMethod === 'debit'}
              type="radio"
              name="paymentMethod"
              value="debit"
              register={register}
              error={errors.paymentMethod}
            >
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </FormFieldRadio>
            <FormFieldRadio
              isSelected={selectedPaymentMethod === 'money'}
              type="radio"
              name="paymentMethod"
              value="money"
              register={register}
              error={errors.paymentMethod}
            >
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </FormFieldRadio>
          </ButtonPaymentMethodBox>
          {errors.paymentMethod && (
            <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>
          )}
        </PaymentMethodSectionStyle>
      </DeliveryPaymentSection>
      <ResumeSection>
        <h1>Cafés selecionados</h1>
        <PaymentBox>
          {cart?.map((order) => {
            return (
              <VerticalCard
                key={order?.card?.id}
                card={order.card}
                quantity={order.quantity}
              />
            )
          })}
          <TotalPrices></TotalPrices>
          {/* <NavLink to="/success" title="Home"> */}
          <ButtonConfirmOrder type="submit" form="formCheckout">
            CONFIRMAR PEDIDO
          </ButtonConfirmOrder>
          {/* </NavLink> */}
        </PaymentBox>
      </ResumeSection>
    </CheckoutMain>
  )
}
