import {
  CoffeeCardStyle,
  TagCoffee,
  FooterCoffeeCard,
  TagBox,
  CartBtn,
} from './styles'

import { InputNumber } from '../../../../components/InputNumber'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeCardType } from '../../../../types'
import { CartContext } from '../../../../contexts/CartProvider'

interface CardProps {
  card: CoffeeCardType
}

export function CoffeeCard({ card }: CardProps) {
  const { addCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddCart() {
    addCart({ card, quantity })
  }

  function HandleAddQuantity() {
    if (quantity >= 0) {
      setQuantity((state) => state + 1)
    }
  }
  function HandleReduceQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeeCardStyle>
      <img src={`/src/assets/coffees/${card.imageName}.svg`} alt="" />
      <TagBox>
        <TagCoffee>{card.tags[0]}</TagCoffee>
        {card.tags[1] ? <TagCoffee>{card.tags[1]}</TagCoffee> : ''}
        {card.tags[2] ? <TagCoffee>{card.tags[2]}</TagCoffee> : ''}
      </TagBox>

      <h1>{card.name}</h1>
      <h2>{card.description}</h2>
      <FooterCoffeeCard>
        <p>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency',
          }).format(card.price)}
        </p>
        <div>
          <InputNumber
            onReduceQuantity={HandleReduceQuantity}
            onAddQuantity={HandleAddQuantity}
            quantity={quantity}
          />

          <CartBtn onClick={handleAddCart} color="white">
            <ShoppingCart size={22} weight="fill" color="white" />
          </CartBtn>
        </div>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
