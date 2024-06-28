import { CoffeeCardStyle } from './styles'
import { CartButton } from '../CartButton'
import expressoTradicional from '../../../../assets/expresso-tradicional.svg'

export function CoffeeCard() {
  return (
    <CoffeeCardStyle>
      <img src={expressoTradicional} alt="" />
      <span>Tradicional</span>
      <h1>Expresso Tradicional</h1>
      <h2>O tradicional café feito com água quente e grãos moídos</h2>
      <div>
        <p>R$ 9,90</p>
        <CartButton color={'white'} bgcolor={'purple'} />
      </div>
    </CoffeeCardStyle>
  )
}
