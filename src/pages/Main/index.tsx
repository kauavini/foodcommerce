import { Container } from './styles'
// components 
import { Sidebar } from '../../components/SIdebar'

import logoImg from "../../assets/logo.svg"
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Container>
      <Sidebar/>
        <section>
          <img src={logoImg} alt="" />
          <Outlet/>
      </section>
    </Container>
  )
}
