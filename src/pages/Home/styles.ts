import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BoxTitlesTag = styled.div`
  max-width: 588px;
  margin-top: 94px;
`
export const Title = styled.h1`
  font-size: 48px;
  font-family: 'Baloo 2';
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};
`
export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['gray-600']};
`

export const BannerContainer = styled.section`
  display: flex;
  height: 544px;
  border: solid 2px red;
  align-items: start;
  justify-content: space-between;

  img {
    max-width: 476px;
    margin-top: 94px;
  }
`

export const MenuContainer = styled.div`
  height: 1645px;
  border: solid 2px green;
  p {
    color: ${(props) => props.theme['gray-600']};
    font-family: 'Baloo 2';
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;
  }
`

export const MenuList = styled.div`
  margin-top: 54px;
`
export const CoffeeCard = styled.div`
  width: 256px;
  height: 310px;
  border: solid 2px green;
`
