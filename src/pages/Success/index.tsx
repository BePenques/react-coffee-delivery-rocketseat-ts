import imageFinish from '../../assets/image-finish.png'

export function Success() {
  return (
    <main>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <section>
        <div>
          <span></span>
          <p>Entrega em Rua João Daniel Martinelli, 10</p>
          <p>Farrapos - Porto Alegre, RS</p>
        </div>
        <div>
          <span></span>
          <p>Previsão de entrega</p>
          <p>20 min - 30 min</p>
        </div>
        <div>
          <span></span>
          <p>Pagamento na entrega</p>
          <p>Cartão de Crédito</p>
        </div>
      </section>
      <section>
        <img src={imageFinish} alt="" />
      </section>
    </main>
  )
}
