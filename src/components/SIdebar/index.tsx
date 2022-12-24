import { useState } from "react"

import { NavLink } from "react-router-dom"

// icons

import { ReactComponent as  BurgerIcon } from "../../assets/burger.svg"
import {ReactComponent as SodaIcon} from "../../assets/soda.svg"
import {ReactComponent as PizzaIcon} from "../../assets/pizza.svg"
import {ReactComponent as IceCreamIcon} from "../../assets/ice-cream.svg"
import menuImg from '../../assets/menu.svg'
// styled components

import { Container } from "./styles"

export const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return(
    <Container isMenuOpen={menuOpen} >
      <button onClick={handleToggleMenu} >
        <img src={menuImg} alt="logo de abertura e fechamento da barra lateral" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <BurgerIcon/>
               <span>Hamburgueres</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/pizzas" className="">
              <PizzaIcon/>
               <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/drinks" className="">
              <SodaIcon/>
               <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ice-creams" className="">
              <IceCreamIcon/>
               <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  
  )
  
}