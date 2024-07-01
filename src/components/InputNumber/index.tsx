import { InputNumberStyle } from './styles'

export function InputNumber() {
  return (
    <InputNumberStyle>
      <button>-</button>
      <input min="1" max="99" id="total" type="number" />
      <button>+</button>
    </InputNumberStyle>
  )
}
