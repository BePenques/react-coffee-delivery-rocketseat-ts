import {
  CoffeeCardStyle,
  TagCoffee,
  FooterCoffeeCard,
  TagBox,
  CartBtn,
  InputNumberStyle,
} from './styles'
// import { CartButton } from '../../../../components/CartButton'
// import { InputNumber } from '../../../../components/InputNumber'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export interface CoffeeCardType {
  id: number
  name: string
  description: string
  imageName: string
  price: string
  tags: string[]
}
export interface Order {
  card: CoffeeCardType
  quantity: number
}

interface CardProps {
  card: CoffeeCardType
  // onAddCart: (card: CoffeeCardType, quantity: number) => void
  onAddCart: ({ card, quantity }: Order) => void
  // onAddQuantity: (card: CoffeeCardType) => void
}

export function CoffeeCard({ card, onAddCart }: CardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleAddCart() {
    onAddCart({ card, quantity })
  }

  function addQuantity() {
    if (quantity >= 0) {
      setQuantity(quantity + 1)
    }
  }
  function reduceQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
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
          <span>R$</span> {card.price}
        </p>
        <div>
          {/* <InputNumber /> */}
          <InputNumberStyle>
            <button onClick={reduceQuantity}>-</button>
            <div>
              <p>{quantity}</p>
            </div>
            <button onClick={addQuantity}>+</button>
          </InputNumberStyle>
          <CartBtn onClick={handleAddCart} color="white">
            {/* <CartBtn> */}
            <ShoppingCart size={22} weight="fill" color="white" />
          </CartBtn>
          {/* <CartButton color={'white'} bgcolor={'purple'} /> */}
        </div>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
