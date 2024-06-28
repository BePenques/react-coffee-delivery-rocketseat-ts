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
  align-items: start;
  justify-content: space-between;
  background-image: url(/src/assets/Background.svg);
  width: 100%;

  img {
    max-width: 476px;
    margin-top: 94px;
  }
`

export const MenuContainer = styled.div`
  height: 1645px;

  p {
    color: ${(props) => props.theme['gray-600']};
    font-family: 'Baloo 2';
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;
  }
`

export const MenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 54px;
  gap: 32px;
`
export const CoffeeCard = styled.div`
  width: 256px;
  height: 310px;
`
