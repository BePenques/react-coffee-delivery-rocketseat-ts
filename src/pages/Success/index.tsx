import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imageFinish from '../../assets/image-finish.png'
import {
  SuccessContainer,
  SuccessTitle,
  SuccessInformation,
  CardInfo,
} from './styles'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../contexts/CartProvider'
import { useContext } from 'react'

export function Success() {
  const { orders } = useContext(CartContext)
  const { id } = useParams()
  const orderInfo = orders?.find((order) => order.id === Number(id))

  if (!orderInfo?.id) {
    return null
  }
  function methodArray(data: string) {
    if (data === 'credit') {
      return 'Cartão de Crédito'
    }
    if (data === 'debit') {
      return 'Cartão de Débito'
    }
    if (data === 'money') {
      return 'Dinheiro'
    }
  }

  return (
    <SuccessContainer>
      <div>
        <SuccessTitle>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessTitle>
        <SuccessInformation>
          <CardInfo bgColor="purple">
            <span>
              <MapPin size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>
                Entrega em{' '}
                <b>
                  {orderInfo?.rua}, {orderInfo?.numero}
                </b>
              </p>
              <p>
                {orderInfo?.cidade}, {orderInfo?.uf}
              </p>
            </div>
          </CardInfo>
          <CardInfo bgColor="yellowLight">
            <span>
              <Timer size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <b>20 min - 30 min</b>
            </div>
          </CardInfo>
          <CardInfo bgColor="yellow">
            <span>
              <CurrencyDollar size={16} weight="fill" color="#fff" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <b>{methodArray(orderInfo?.paymentMethod)}</b>
            </div>
          </CardInfo>
        </SuccessInformation>
      </div>
      <section>
        <img src={imageFinish} alt="" />
      </section>
    </SuccessContainer>
  )
}
