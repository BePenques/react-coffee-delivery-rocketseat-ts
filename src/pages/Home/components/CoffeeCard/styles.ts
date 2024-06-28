import styled from 'styled-components'

export const CoffeeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 310px;
  border: solid 2px green;
  padding: 20px;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    font-family: 'baloo 2';
  }

  h2 {
    font-size: 14px;
    font-weight: normal;
  }

  img {
    width: 120px;
    height: 120px;
  }
`
