import styled from 'styled-components'

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const DeliveryPaymentSection = styled.section`
  width: 40rem;

  h1 {
    margin-bottom: 0.937rem;
    font-size: 18px;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: bold;
  }
`

export const FormBox = styled.div`
  height: 22.62rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  border-radius: 6px;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h3 {
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 130%;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    input {
      height: 42px;
      border-radius: 4px;
      background-color: ${(props) => props.theme['gray-40']};
      border: solid 1px ${(props) => props.theme['gray-50']};
      color: ${(props) => props.theme['gray-400']};
      padding: 0.75rem;
      box-shadow: none;
      font-size: 14px;
      font-family: 'Roboto';
      line-height: 130%;
    }

    input::-webkit-input-placeholder {
      color: ${(props) => props.theme['gray-300']};
    }

    input:-moz-placeholder {
      /* Firefox 18- */
      color: ${(props) => props.theme['gray-300']};
    }

    input::-moz-placeholder {
      /* Firefox 19+ */
      color: ${(props) => props.theme['gray-300']};
    }

    input:-ms-input-placeholder {
      color: ${(props) => props.theme['gray-300']};
    }

    input[name='Rua'] {
      width: 100%;
      margin-top: 16px;
    }
    input[name='Numero'] {
      width: 12.5rem;
      margin-top: 16px;
    }
    input[name='Complemento'] {
      width: 21.75rem;
      margin-top: 16px;
    }
    input[name='Bairro'] {
      width: 12.5rem;
      margin-top: 16px;
    }
    input[name='Cidade'] {
      width: 17.25rem;
      margin-top: 16px;
    }
    input[name='UF'] {
      width: 3.75rem;
      margin-top: 16px;
    }
  }
`
export const PaymentMethodSection = styled.section`
  height: 12.93rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h3 {
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 130%;
    margin-bottom: 2rem;
  }
`
export const ButtonPaymentMethodBox = styled.button`
  display: flex;
  gap: 12px;
  border: none;

  button {
    border: none;
    background-color: ${(props) => props.theme['gray-50']};
    padding: 1rem;
    width: 178.67px;
    font-size: 12px;
    color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
    border-radius: 6px;
    display: flex;
    gap: 0.75rem;
    flex-direction: row;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['gray-600']};
    }
    &:focus {
      box-shadow: none;
      border: solid 2px ${(props) => props.theme['purple-400']};
      background-color: ${(props) => props.theme['purple-100']};
    }
  }
`
export const ResumeSection = styled.section`
  h1 {
    margin-bottom: 0.937rem;
    font-size: 18px;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: bold;
  }
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
  gap: 1.5rem;
  /* gap: 3rem; */
  hr {
    width: 100%;
    height: 1px;
    border: 0px;
    border-top: 1px solid ${(props) => props.theme['gray-50']};
  }
`

export const ButtonConfirmOrder = styled.button`
  border: none;
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme['yellow-400']};
  color: white;
  font-size: 0.875rem;
  border-radius: 6px;
  width: 23rem;
  height: 2.87rem;
  cursor: pointer;
`
export const VerticalCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 23rem;
  height: 5rem;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }
  h3 {
    font-size: 16px;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-400']};
  }
  p {
    font-size: 16px;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-600']};
  }
`
export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 1.5px;
  font-size: 12px;
  background-color: ${(props) => props.theme['gray-50']};
  color: ${(props) => props.theme['gray-400']};
  width: 91px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
`

export const TotalPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
`
export const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
  }
  span {
    font-size: 16px;
  }
`
export const PriceLineTotal = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`
