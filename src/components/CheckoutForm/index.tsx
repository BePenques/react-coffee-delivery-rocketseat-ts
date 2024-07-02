import { FormContainer } from './styles'

export function CheckoutForm() {
  return (
    <FormContainer>
      <input type="text" name="CEP" placeholder="CEP" />
      <input type="text" name="Rua" placeholder="Rua" />
      <input type="text" name="Numero" placeholder="Número" />
      <input type="text" name="Complemento" placeholder="Complemento" />
      <input type="text" name="Bairro" placeholder="Bairro" />
      <input type="text" name="Cidade" placeholder="Cidade" />
      <input type="text" name="UF" placeholder="UF" />
    </FormContainer>
  )
}
