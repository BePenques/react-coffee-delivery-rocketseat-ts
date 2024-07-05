import styled from 'styled-components'

export const InputNumberStyle = styled.div`
  margin-right: 8px;
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 32px;
    border: none;
    background-color: ${(props) => props.theme['gray-50']};
    box-shadow: none;
    cursor: default;
    p {
      font-size: 16px;
      font-weight: 400;
    }
  }
  button {
    width: 24px;
    height: 32px;
    color: ${(props) => props.theme['purple-400']};
    border: none;
    background-color: ${(props) => props.theme['gray-50']};
    cursor: pointer;
    border: none;
  }
`
