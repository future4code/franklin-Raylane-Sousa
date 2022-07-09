import styled from 'styled-components'

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 10vh;
`
export const InputsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    margin-bottom: 20px;

`
export const LoginFormContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    align-items: center;
    margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    max-width: 250px;
    margin-top: 10px;
   /*  border: 2px;
    /* background-color: gray; */ 
`

export const LogoImage = styled.img `
    width: 70vw;
    max-width: 350px;
`

export const BtnButton = styled.button`
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 250px;
    
`
export const LabelText = styled.input `
    border-radius: 4px;
    color: #f4511e;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 250px;
    transition: all 0.5s;
    margin: 5px;
    
`