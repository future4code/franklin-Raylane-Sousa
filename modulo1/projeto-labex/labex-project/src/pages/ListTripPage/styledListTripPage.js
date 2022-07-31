import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 30px;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
`
export const ContainerArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    width: 300px;
    position: relative;
    background-color: #231955;
    margin: 30px;
    padding: 10px;
    border: outset 10px;
    border-radius: 30px;


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
    margin-top: 80px;
    color: #E8AA42;
`