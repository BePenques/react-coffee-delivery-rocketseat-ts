import styled from 'styled-components'

export const Box = styled.label`
  padding: 16px;
  width: 178.67px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['gray-50']};
  color: ${(props) => props.theme['gray-400']};
  font-size: 12px;
  font-family: 'Roboto';
  cursor: pointer;
  box-shadow: none;

  input {
    display: none;
  }

  &[data-state='true'] {
    box-shadow: none;
    border: solid 2px ${(props) => props.theme['purple-400']};
    background-color: ${(props) => props.theme['purple-100']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-600']};
  }
  &:focus {
    box-shadow: none;
  }
`
