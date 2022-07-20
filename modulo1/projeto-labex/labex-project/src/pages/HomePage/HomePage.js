//Para o usuário escolher entre Área Administrativa e Lista de Viagens
import {useNavigate} from 'react-router-dom'
import React from 'react'
import { ScreenContainer, ContainerArea, BtnButton, Title } from './StyledHomePage'
import { goToAdminHomePage, goToListTripPage } from '../../routes/coordinator'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <ScreenContainer>
            <ContainerArea>
            <Title>LABEX</Title>
            <BtnButton onClick={() => goToListTripPage(navigate)}>Viagens</BtnButton>
            <BtnButton onClick={() => goToAdminHomePage(navigate)}>Administrador</BtnButton>
            </ContainerArea>
        </ScreenContainer>
    )
}