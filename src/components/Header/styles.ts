import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    cursor: pointer;
  }
  nav {
    display: flex;
    gap: 0.75rem;
  }

  a div {
    display: flex;
    background-color: ${(props) => props.theme['purple-100']};
    align-items: center;
    padding: 0.62rem 0.5rem;
    border-radius: 8px;
    height: 2.37rem;
    gap: 0.125rem;
    cursor: default;
    p {
      text-decoration: none;
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
