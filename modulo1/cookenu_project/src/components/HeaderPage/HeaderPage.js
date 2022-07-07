import React from 'react'
import { ButtonNav, StyledToolbar} from './StyledToolbar'
import { goToLogin, goToRecipesList } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const HeaderPage = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token") //pega o token do localstorage
    const navigate = useNavigate()

   
    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    return (
        <StyledToolbar>
            <ButtonNav onClick={() => goToRecipesList(navigate)}>Cookenu</ButtonNav>
            <ButtonNav onClick={rightButtonAction}>{rightButtonText}</ButtonNav>
        </StyledToolbar>
        )}

export {HeaderPage}

/* Para fazer a barra de navegacao copiamos do meterial
Para fazer os botoes da barra de navegacao 
chama o hook history 
guarda o historico em uma variave 
passa como parametro dentro das funcoes do coordinator em um evento onclick do botao 

cada funcao envia para uma rota diferente

dentro da tag browser router temos o componente header  */



