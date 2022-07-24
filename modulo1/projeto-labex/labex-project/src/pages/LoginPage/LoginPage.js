//Para fazermos login como administradorimport react from 'react-router-dom'
import { InputArea,ScreenContainer, ContainerArea, Title, BtnButton } from './styledLoginPage'
import { useState } from 'react'
import axios from 'axios'
import { goToHomePage} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate()
    const [inputPassword, setInputPassword] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const onSubmitLogin = () => {
        const body = {
            email: inputEmail,
            password: inputPassword
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/raylanenara/login', body)
        .then((response)=> {
            console.log("Deu certo", response.data.token)
            alert("Deu certo", response.data.token)
            localStorage.setItem('token', response.data.token)
            setInputEmail("")
            setInputPassword("")
            goToHomePage(navigate);

        }).catch((error)=>{
            console.log("Deu errado", error.response)
            alert("Acesso negado, verifique se suas informações estão corretas!")

        })

    }

    const onChangeEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setInputPassword(event.target.value)
    }

    return (
        <ScreenContainer>
            <ContainerArea>
            <Title>LABEX</Title> 
            <InputArea type='email' value={inputEmail} onChange={onChangeEmail} required/>
            <InputArea type='password' value={inputPassword} onChange={onChangePassword} required/>
            <BtnButton onClick={onSubmitLogin}>Login</BtnButton>
            </ContainerArea>
        </ScreenContainer>
    )
}