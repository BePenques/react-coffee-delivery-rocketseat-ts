import { VerticalCardStyle, TrashButton } from './styles'
import { Trash } from 'phosphor-react'
import { InputNumber } from '../../components/InputNumber'

export function VerticalCard() {
  return (
    <VerticalCardStyle>
      <img src={`/src/assets/coffees/expressoGelado.svg`} alt="" />
      <div>
        <p>Expresso Tradicional</p>
        <span>
          <InputNumber />
          <TrashButton>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </TrashButton>
        </span>
      </div>
      <h3>R$ 9,90</h3>
    </VerticalCardStyle>
  )
}
