import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  input {
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
  }

  input::-webkit-input-placeholder {
    color: ${(props) => props.theme['gray-300']};
  }

  input:-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.theme['gray-300']};
  }

  input::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.theme['gray-300']};
  }

  input:-ms-input-placeholder {
    color: ${(props) => props.theme['gray-300']};
  }

  input[name='Rua'] {
    width: 100%;
    margin-top: 16px;
  }
  input[name='Numero'] {
    width: 12.5rem;
    margin-top: 16px;
  }
  input[name='Complemento'] {
    width: 21.75rem;
    margin-top: 16px;
  }
  input[name='Bairro'] {
    width: 12.5rem;
    margin-top: 16px;
  }
  input[name='Cidade'] {
    width: 17.25rem;
    margin-top: 16px;
  }
  input[name='UF'] {
    width: 3.75rem;
    margin-top: 16px;
  }
`
