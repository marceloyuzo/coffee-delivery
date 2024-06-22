import { ButtonCart, HeaderContainer, LocalInfo } from "./style";
import Logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react"


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt='' />
      </NavLink>

      <nav>
        <LocalInfo>
          <MapPin weight="fill" size={22} color='#8047F8' />
          <span>Maringá, PR</span>
        </LocalInfo>
        <NavLink to='/cart'>
          <ButtonCart>
            <ShoppingCart weight='fill' size={22} color='#C47F17' />
            <span>2</span>
          </ButtonCart>
        </NavLink>
      </nav>
    </ HeaderContainer>
  )
}