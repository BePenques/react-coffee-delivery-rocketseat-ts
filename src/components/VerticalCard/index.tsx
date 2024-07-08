import { VerticalCardStyle, TrashButton } from './styles'
import { Trash } from 'phosphor-react'
import { InputNumber } from '../../components/InputNumber'
import { Order } from '../../types'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function VerticalCard({ card, quantity }: Order) {
  const { addQuantityOfOrder, reduceQuantityOfOrder, cart } =
    useContext(CartContext)

  function HandleAddQuantity() {
    addQuantityOfOrder(card)
    console.log(cart)
  }
  function HandleReduceQuantity() {
    reduceQuantityOfOrder(card)
    console.log(cart)
  }

  return (
    <VerticalCardStyle>
      <img src={`/src/assets/coffees/${card.imageName}.svg`} alt="" />
      <div>
        <p>{card.name}</p>
        <span>
          <InputNumber
            onReduceQuantity={HandleReduceQuantity}
            onAddQuantity={HandleAddQuantity}
            quantity={quantity}
          />
          <TrashButton>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </TrashButton>
        </span>
      </div>
      <h3>R$ {card.price}</h3>
    </VerticalCardStyle>
  )
}
