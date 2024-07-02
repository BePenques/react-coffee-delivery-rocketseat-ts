import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    margin-top: 11.25rem;
  }
`
export const SuccessTitle = styled.div`
  margin-top: 80px;
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['yellow-700']};
    line-height: 130%;
  }
  p {
    font-size: 1.25rem;
    font-family: 'Roboto';
    color: ${(props) => props.theme['gray-600']};
    line-height: 130%;
  }
`
export const SuccessInformation = styled.section`
  display: flex;
  flex-direction: column;
  border: solid 1px green;
  border-image: linear-gradient(to bottom, #dbac2c, #8047f8) 1;
  margin-top: 2.5rem;
  padding: 2.5rem;
  gap: 2rem;
  /* border-top-right-radius: 36px;
  border-bottom-left-radius: 36px; */
`
const STATUS_COLORS = {
  yellow: 'yellow-700',
  purple: 'purple-400',
  yellowLight: 'yellow-400',
} as const

interface StatusProps {
  bgColor: 'yellow' | 'purple' | 'yellowLight'
}

export const CardInfo = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  align-items: self-start;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-400']};
  font-size: 1rem;
  line-height: 130%;
  font-family: 'Roboto';

  span {
    padding: 0.5rem;
    border-radius: 100%;
    align-items: center;
    display: flex;
    background: ${(props) => props.theme[STATUS_COLORS[props.bgColor]]};
  }
`
