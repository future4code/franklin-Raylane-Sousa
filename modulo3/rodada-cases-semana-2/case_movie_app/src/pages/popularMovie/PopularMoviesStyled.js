import styled from "styled-components";



export const Button = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    padding: 15px 32px;
    text-align: center;
    &:hover{
        background-color: transparent;
        color: #f7d354
    }
    
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
`
export const Title = styled.h2`
    font-size: 2rem;
`