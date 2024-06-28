import {
  BannerContainer,
  BoxTitlesTag,
  HomeContainer,
  MenuContainer,
  Subtitle,
  MenuList,
  Title,
} from './styles'
import coffeeimage from '../../assets/coffee-image.svg'
import { BannerTags } from './components/BannerTags'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <BoxTitlesTag>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <BannerTags />
        </BoxTitlesTag>
        <img src={coffeeimage} alt="" />
      </BannerContainer>
      <MenuContainer>
        <p>Nossos cafés</p>
        <MenuList>
          <CoffeeCard />
        </MenuList>
      </MenuContainer>
    </HomeContainer>
  )
}
