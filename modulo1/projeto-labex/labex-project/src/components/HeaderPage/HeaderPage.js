import * as React from 'react';
import { NavItem, Links, Container } from './styledHeaderPage';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToListTripPage, goToLogin} from '../../routes/coordinator';


export const HeaderPage = ({bntLoginLogout, setBtnLoginLogout}) => {

  const token = localStorage.getItem("token") //pega o token do localstorage
    const navigate = useNavigate()

   
    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(navigate)
    }



  return (
  <Container>
    <NavItem><Links onClick={() => goToHomePage(navigate)}>Home</Links></NavItem>
    <NavItem><Links onClick={() => goToListTripPage(navigate)}>Viagens</Links></NavItem>
    <NavItem><Links onClick={logout}>Login/Logout</Links></NavItem>
  </Container>
    )
}
