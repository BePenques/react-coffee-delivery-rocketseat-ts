import {
  CoffeeCardStyle,
  TagCoffee,
  FooterCoffeeCard,
  InputNumber,
  TagBox,
} from './styles'
import { CartButton } from '../CartButton'

export interface CoffeeCardType {
  id: number
  name: string
  description: string
  imageName: string
  price: string
  tags: string[]
}
interface CardProps {
  card: CoffeeCardType
}

export function CoffeeCard({ card }: CardProps) {
  // function mais() {
  //   const atual = document.getElementById('total')?.value
  //   const novo = atual - -1 // Evitando Concatenacoes
  //   document.getElementById('total')?.value = novo
  // }

  // function menos() {
  //   const atual = document.getElementById('total')?.value
  //   if (atual > 0) {
  //     // evita números negativos
  //     const novo = atual - 1
  //     document.getElementById('total')?.value = novo
  //   }
  // }

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
          <InputNumber>
            <button>-</button>
            <input min="1" max="99" id="total" type="number" />
            <button>+</button>
          </InputNumber>

          <CartButton color={'white'} bgcolor={'purple'} />
        </div>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
