import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

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
          <button>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
