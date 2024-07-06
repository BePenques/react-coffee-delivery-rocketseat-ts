import styled from 'styled-components'

const STATUS_COLORS = {
  white: 'white',
  darkYellow: 'yellow-700',
  yellow: 'yellow-100',
  purple: 'purple-400',
} as const

export interface propsCartBtn {
  color: 'white' | 'darkYellow'
  bgcolor: 'yellow' | 'purple'
}

export const CartBtn = styled.aside<propsCartBtn>`
  width: 2.37rem;
  height: 2.37rem;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.bgcolor]]};
  border: transparent;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
