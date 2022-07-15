import styled from "styled-components"

export const ListaContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 20px;
    margin-top: 10px;
`
export const Lista = styled.div `
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    background-color: #004d40;
    color: white;
    border-radius: 10px;
    border: outset 10px;
    font-size: 20px;
`

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: yellow;
`
export const BtnButton = styled.button`
    border-radius: 50px;
    background-color: #282c34;
    border: none;
    color: #FFFFFF;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    width: 200px;
    height: 50px;
    margin: 10px; `

export const InputArea = styled.input`
    border-radius: 4px;
    color: #00BFFF;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    width: 300px;
    transition: all 0.5s;
    margin: 5px;
`