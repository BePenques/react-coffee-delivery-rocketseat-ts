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

  a button {
    width: 2.37rem;
    height: 2.37rem;
    background-color: ${(props) => props.theme['yellow-100']};
    border: transparent;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
