import { ReactNode } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export type FormDataT = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

export type ValidFieldNames =
  | 'cep'
  | 'rua'
  | 'numero'
  | 'complemento'
  | 'bairro'
  | 'cidade'
  | 'uf'
  | 'paymentMethod'

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<FormDataT>
  error: FieldError | undefined
  valueAsNumber?: boolean
  onBlur?: React.ChangeEventHandler<HTMLInputElement>
}

export type FormFieldRadioProps = {
  type: string
  name: ValidFieldNames
  value: string
  register: UseFormRegister<FormDataT>
  error: FieldError | undefined
  isSelected: boolean
  valueAsNumber?: boolean
  children?: ReactNode | undefined
}

export interface CoffeeCardType {
  id: number
  name: string
  description: string
  imageName: string
  price: number
  tags: string[]
}
export interface Order {
  card: CoffeeCardType
  quantity: number
}
