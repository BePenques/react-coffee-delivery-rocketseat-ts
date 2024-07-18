import { HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartButton } from '../../components/CartButton'
import { CartContext } from '../../contexts/CartProvider'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>
      <aside>
        <div>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <p>Campinas, SP</p>
        </div>
        {cart?.length > 0 ? (
          <NavLink to="/checkout">
            <CartButton color={'darkYellow'} bgcolor={'yellow'} />
            {cart?.length > 0 ? <span>{cart?.length}</span> : null}
          </NavLink>
        ) : (
          <>
            <CartButton color={'darkYellow'} bgcolor={'yellow'} />
            {cart?.length > 0 ? <span>{cart?.length}</span> : null}
          </>
        )}
      </aside>
    </HeaderContainer>
  )
}
