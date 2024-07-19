import { CoffeeCardStyle, TagCoffee, FooterCoffeeCard, TagBox } from './styles'

import { InputNumber } from '../../../../components/InputNumber'
import { useContext, useState } from 'react'
import { CoffeeCardType } from '../../../../types'
import { CartContext } from '../../../../contexts/CartProvider'
import { CartButton } from '../../../../components/CartButton'

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
      <img
        src={`/react-coffee-delivery-rocketseat-ts/images/coffees/${card.imageName}.svg`}
        alt=""
      />
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

          <a onClick={handleAddCart}>
            <CartButton color={'white'} bgcolor={'purple'} />
          </a>
        </div>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
