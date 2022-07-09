import React from 'react'
import logo from '../../assets/logocookenu.png'
import { ScreenContainer, LogoImage, SignUpButtonContainer, BtnButton} from './styledLogin'
import { LoginForm } from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const LoginPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()
    const navigate = useNavigate()
    return (
    <ScreenContainer>
        <LogoImage src={logo}/>
        <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <SignUpButtonContainer>
        <BtnButton onClick={() => goToSignUp(navigate)}>Não possui conta? Cadastre-se</BtnButton> 
        </SignUpButtonContainer>
       
    </ScreenContainer> 
    )
}


export {LoginPage}