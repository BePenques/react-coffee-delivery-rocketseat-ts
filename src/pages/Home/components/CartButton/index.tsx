import { ShoppingCart } from 'phosphor-react'
import { CartBtn, propsCartBtn } from './style.ts'

// export function CartButton({ color, bgcolor }: propsCartBtn) {
export function CartButton({ color, bgcolor }: propsCartBtn) {
  const STATUS_COLORS = {
    white: 'white',
    darkYellow: '#C47F17',
    yellow: '#DBAC2C',
    purple: '#8047F8',
  } as const

  return (
    <CartBtn color={color} bgcolor={bgcolor}>
      {/* <CartBtn> */}
      <ShoppingCart size={22} weight="fill" color={STATUS_COLORS[color]} />
    </CartBtn>
  )
}
