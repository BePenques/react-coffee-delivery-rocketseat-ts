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
import { CoffeeCardType } from '../../types'

const coffeeCards: CoffeeCardType[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageName: 'expressoTradicional',
    price: '9,90',
    tags: ['TRADICIONAL'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageName: 'expressoAmericano',
    price: '9,90',
    tags: ['TRADICIONAL'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageName: 'expressoCremoso',
    price: '9,90',
    tags: ['TRADICIONAL'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageName: 'expressoGelado',
    price: '9,90',
    tags: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageName: 'cafeComLeite',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageName: 'latte',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageName: 'capuccino',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageName: 'macchiato',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageName: 'mocaccino',
    price: '9,90',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageName: 'chocolateQuente',
    price: '9,90',
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageName: 'cubano',
    price: '9,90',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageName: 'havaiano',
    price: '9,90',
    tags: ['ESPECIAL'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageName: 'arabe',
    price: '9,90',
    tags: ['ESPECIAL'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageName: 'irlandes',
    price: '9,90',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]

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
          {coffeeCards.map((card) => {
            return <CoffeeCard key={card.id} card={card} />
          })}
        </MenuList>
      </MenuContainer>
    </HomeContainer>
  )
}
