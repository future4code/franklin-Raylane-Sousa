import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    position: fixed;
`
export const NavItem = styled.li`
    float: left;
`
export const Links = styled.a`
    display: block;
    color: #E8AA42;
    font-size: x-large;
    font-weight: bolder;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
        &:hover {
        background-color: #1F4690;
        color: white;
    }

`