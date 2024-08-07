import styled from 'styled-components'

export const CoffeeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 310px;
  padding: 0px 15px;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme['gray-30']};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;

  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    font-family: 'baloo 2';
    margin-top: 16px;
  }

  h2 {
    font-size: 14px;
    font-weight: normal;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-300']};
    text-align: center;
    margin-top: 8px;
  }

  img {
    width: 120px;
    height: 120px;
  }
`
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const TagCoffee = styled.span`
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 4px;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
  border-radius: 100px;
  margin-top: 12px;
`
export const FooterCoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
  gap: 23px;

  p {
    font-size: 22px;
    span {
      font-size: 14px;
      font-family: 'Roboto';
      font-weight: normal;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 20px;
    }
  }
`
export const CartBtn = styled.span`
  width: 2.37rem;
  height: 2.37rem;
  background-color: ${(props) => props.theme['purple-400']};
  border: transparent;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
