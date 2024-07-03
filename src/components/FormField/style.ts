import styled from 'styled-components'

export const Box = styled.section`
  display: flex;
  flex-direction: column;
`

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  margin-top: 2px;
  font-family: 'Roboto';
`
export const FormFieldStyle = styled.input`
  height: 42px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['gray-40']};
  border: solid 1px ${(props) => props.theme['gray-50']};
  color: ${(props) => props.theme['gray-400']};
  padding: 0.75rem;
  box-shadow: none;
  font-size: 14px;
  font-family: 'Roboto';
  line-height: 130%;

  &[name='rua'] {
    width: 560px;
    margin-top: 16px;
  }
  &[name='numero'] {
    width: 12.5rem;
    margin-top: 16px;
  }
  &[name='complemento'] {
    width: 21.75rem;
    margin-top: 16px;
  }
  &[name='bairro'] {
    width: 12.5rem;
    margin-top: 16px;
  }
  &[name='cidade'] {
    width: 17.25rem;
    margin-top: 16px;
  }
  &[name='uf'] {
    width: 3.75rem;
    margin-top: 16px;
  }
`
