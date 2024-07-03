import { FieldError, UseFormRegister } from 'react-hook-form'

export type FormData = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export type ValidFieldNames =
  | 'cep'
  | 'rua'
  | 'numero'
  | 'complemento'
  | 'bairro'
  | 'cidade'
  | 'uf'

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}
