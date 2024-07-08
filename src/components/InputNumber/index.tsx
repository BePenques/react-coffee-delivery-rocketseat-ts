import { InputNumberStyle } from './styles'

interface InputNumberProps {
  onReduceQuantity: () => void
  onAddQuantity: () => void
  quantity: number
}

export function InputNumber({
  onReduceQuantity,
  onAddQuantity,
  quantity,
}: InputNumberProps) {
  function handleReduceQuantity() {
    onReduceQuantity()
  }
  function HandleAddQuantity() {
    onAddQuantity()
  }

  return (
    <InputNumberStyle>
      <button onClick={handleReduceQuantity}>-</button>
      <div>
        <p>{quantity}</p>
      </div>
      <button onClick={HandleAddQuantity}>+</button>
    </InputNumberStyle>
  )
}
