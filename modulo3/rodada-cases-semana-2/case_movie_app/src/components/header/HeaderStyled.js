import styled from "styled-components"

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 0.5rem;
    background-color: #02033b;
`

export const TitleNavbar = styled.h2`
    display: flex;
    align-items: center;
    gap:0.5rem;
    color: #d0efff;
    &:hover{
        background-color: transparent;
        color: #f7d354
    }
`

export const FormNavbar = styled.form`
    display: flex;
    gap: .5rem;
`
export const InputNavbar = styled.input`
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
`

export const FormButton = styled.button`
    background-color: #d0efff;
    border: 2px solid #d0efff;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        background-color: transparent;
        color: #f7d354
    }
`

export const Logo = styled.div`
    font-size: 2rem;
`
