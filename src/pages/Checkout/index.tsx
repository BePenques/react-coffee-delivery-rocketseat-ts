import {
  CheckoutMain,
  DeliveryPaymentSection,
  FormBox,
  PaymentBox,
  ResumeSection,
  ButtonConfirmOrder,
  FormContainer,
} from './styles'
import { MapPinLine } from 'phosphor-react'
import { PaymentMethodSection } from '../../components/PaymentMethodSection'
import { VerticalCard } from '../../components/VerticalCard'
import { TotalPrices } from '../../components/TotalPrices'
import FormField from '../../components/FormField'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormData } from '../../components/FormField/types'

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
})

export function Checkout() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: FormData) {
    console.log('SUCCESS', data)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

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
        <PaymentMethodSection></PaymentMethodSection>
      </DeliveryPaymentSection>
      <ResumeSection>
        <h1>Cafés selecionados</h1>
        <PaymentBox>
          <VerticalCard></VerticalCard>
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
