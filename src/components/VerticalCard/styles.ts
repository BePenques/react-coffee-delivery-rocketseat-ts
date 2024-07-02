import styled from 'styled-components'

export const VerticalCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 23rem;
  height: 5rem;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  span {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }
  h3 {
    font-size: 16px;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-400']};
  }
  p {
    font-size: 16px;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-600']};
  }
`
export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 1.5px;
  font-size: 12px;
  background-color: ${(props) => props.theme['gray-50']};
  color: ${(props) => props.theme['gray-400']};
  width: 91px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
`
