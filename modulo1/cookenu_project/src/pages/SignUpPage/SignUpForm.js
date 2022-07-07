import React from 'react'
import {InputsContainer, LabelText, BtnButton, ScreenContainer} from './styledSignUp'
import {useNavigate} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import { signUp } from '../../services/user'


const SignUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({name:'', email:'', password:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
        <ScreenContainer>
            <InputsContainer>
            <LabelText name={"name"} value={form.name} onChange={onChange} required  type={'text'} placeholder={'Nome'} />
                <LabelText name={"email"} value={form.email} onChange={onChange} required type={'email'} placeholder={'Email'} /> 
                <LabelText name={"password"} value={form.password} onChange={onChange} required type={'password'} placeholder={'Senha'}/>
                <BtnButton type={'Submit'}>Fazer Cadastro</BtnButton> 
            </InputsContainer>
        </ScreenContainer>  
        </form>

        )
        
    }

    export {SignUpForm}