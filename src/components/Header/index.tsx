import { HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../CartButton'
// import { CartButton } from '../../components/CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <a>
          <div>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <p>Campinas, SP</p>
          </div>
        </a>
        <NavLink to="/checkout" title="Checkout">
          <CartButton color={'darkYellow'} bgcolor={'yellow'} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
