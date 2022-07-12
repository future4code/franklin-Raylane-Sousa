import React, {useState} from "react";
import axios from 'axios'
import { goToUsersList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BtnButton, InputArea, SignUpContainer } from "./StyledSignUp";

export const SignUp = () => {
const [userName, setUserName] = useState('')
const [userEmail, setUserEmail] = useState('')
const navigate = useNavigate()

const createUser = () =>  {
    const body = {name: userName, email: userEmail}
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: '"raylane-sousa-franklin"'
      }
    }).then((response) => {
        console.log(response)
        alert('Cadastro realizado com sucesso')
        setUserName('')
        setUserEmail('')
    }).catch((error) => {
        console.log(error.code)
    })
}
  

const handleInputName = (event) => {
    setUserName(event.target.value)
}

const handleInputEmail = (event) => {
    setUserEmail(event.target.value)
}

    return(
        <SignUpContainer>
            <h1>Sign Up</h1>
            <InputArea value={userName} onChange={handleInputName} placeholder={'Name'} required/>
            <InputArea value={userEmail} type={'email'} onChange={handleInputEmail} placeholder={'user@email'} required/>
            <BtnButton onClick={createUser}>Cadastrar</BtnButton>
            <BtnButton onClick={() => goToUsersList(navigate)}>Ir para Lista de usuários</BtnButton>
        </SignUpContainer>
    )
}
