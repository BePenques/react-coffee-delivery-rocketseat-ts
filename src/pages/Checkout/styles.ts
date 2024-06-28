import styled from 'styled-components'

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const DeliveryPaymentSection = styled.section`
  width: 40rem;
`

export const FormBox = styled.div`
  height: 22.62rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  border-radius: 6px;
`
export const PaymentMethodBox = styled.div`
  height: 12.93rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;
`

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: 31.12rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
  gap: 3rem;
`
export const VerticalCardStyle = styled.div`
  display: flex;
  width: 23rem;
  height: 5rem;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`
export const TotalPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    display: flex;
    justify-content: space-between;
  }
`
