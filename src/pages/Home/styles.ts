import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BoxTitlesTag = styled.div`
  max-width: 36.75rem;
  margin-top: 5.87rem;
`
export const Title = styled.h1`
  font-size: 3rem;
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
  height: 34rem;
  align-items: start;
  justify-content: space-between;
  width: 100%;

  img {
    max-width: 29.75rem;
    margin-top: 5.87rem;
  }
`

export const MenuContainer = styled.div`
  height: 102.81rem;

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
  margin-top: 3.375rem;
  gap: 2rem;
`
export const CoffeeCard = styled.div`
  width: 3.375rem;
  height: 19.37rem;
`
