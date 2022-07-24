import styled from 'styled-components'

export const ContainerArea = styled.div`
    border: solid 5px;
    border-radius: solid 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    width: 400px;
    height: 500px;
    position: relative;
    background-color: #231955;
`


export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 20px;
    margin-top: 10px;
    
`

export const BtnButton = styled.button`
    border-radius: 50px;
    background-color: #FFE5B4;
    border: none;
    color: #1F4690;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 200px;
    height: 50px;
    margin: 10px;
    &:hover,
    &:focus {
        transition: transform .2s;
        transform: scale(1.01);
        color: white;
        background-color: #1F4690;
    }
    &:active{
        transform: scale(1.05);
    }
`
export const Title = styled.h1`
    color: #E8AA42;
`
export const InputArea = styled.input `
    border-radius: 4px;
    color: #f4511e;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 250px;
    transition: all 0.5s;
    margin: 5px;
    
`