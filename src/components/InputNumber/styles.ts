import styled from 'styled-components'

export const InputNumberStyle = styled.div`
  margin-right: 8px;
  display: flex;

  input {
    width: 24px;
    height: 32px;
    border: none;
    background-color: ${(props) => props.theme['gray-50']};
    box-shadow: none;
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

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
