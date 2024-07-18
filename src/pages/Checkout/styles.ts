import styled from 'styled-components'

export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const DeliveryPaymentSection = styled.section`
  width: 40rem;

  h1 {
    margin-bottom: 0.937rem;
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: bold;
  }
`

export const FormBox = styled.div`
  height: auto;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  border-radius: 6px;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: normal;
  }
  p {
    font-size: 0.875rem;
    font-family: 'Roboto';
    line-height: 130%;
    margin-bottom: 2rem;
  }
`
export const ResumeSection = styled.section`
  h1 {
    margin-bottom: 0.937rem;
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: bold;
  }
`

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  height: auto;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
  gap: 1.5rem;

  hr {
    width: 100%;
    height: 1px;
    border: 0px;
    border-top: 1px solid ${(props) => props.theme['gray-50']};
  }
`
export const ButtonConfirmOrder = styled.button`
  border: none;
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => props.theme['yellow-400']};
  color: white;
  font-size: 0.875rem;
  border-radius: 6px;
  width: 23rem;
  height: 2.87rem;
  cursor: pointer;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

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
  span {
    font-size: 10px;
    color: red;
    font-family: 'Roboto';
  }
`
export const PaymentMethodSectionStyle = styled.section`
  height: 12.93rem;
  background-color: ${(props) => props.theme['gray-30']};
  padding: 2.5rem;
  margin-top: 0.75rem;
  border-radius: 6px;
  box-shadow: none;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h3 {
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 130%;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    font-family: 'Roboto';
    line-height: 130%;
    margin-bottom: 2rem;
  }
`
export const ButtonPaymentMethodBox = styled.aside`
  display: flex;
  gap: 12px;
  border: none;
  box-shadow: none;
`
export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
  margin-top: 2px;
  font-family: 'Roboto';
`
