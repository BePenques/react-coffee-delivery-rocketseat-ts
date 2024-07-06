import styled from 'styled-components'

export const LocationBox = styled.a`
  div {
    display: flex;
    flex-direction: row;
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

  aside {
    display: flex;
    gap: 12px;
  }

  aside div {
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

  aside a {
    position: relative;
    span {
      background-color: ${(props) => props.theme['yellow-700']};
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);

      font-size: 12px;
      font-family: 'Roboto';
      font-weight: bold;
      color: white;
    }
  }
`
