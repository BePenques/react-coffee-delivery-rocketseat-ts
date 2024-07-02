import styled from 'styled-components'

export const TotalPricesLayout = styled.div`
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
