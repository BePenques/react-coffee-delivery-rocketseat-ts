import { CoffeeCardStyle, TagCoffee, FooterCoffeeCard, TagBox } from './styles'
import { CartButton } from '../../../../components/CartButton'
import { InputNumber } from '../../../../components/InputNumber'

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
          <InputNumber />
          <CartButton color={'white'} bgcolor={'purple'} />
        </div>
      </FooterCoffeeCard>
    </CoffeeCardStyle>
  )
}
