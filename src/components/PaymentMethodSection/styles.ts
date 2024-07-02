import styled from 'styled-components'

export const PaymentMethodSectionStyle = styled.section`
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
