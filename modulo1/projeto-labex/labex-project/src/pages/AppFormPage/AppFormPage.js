//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição//Formulário para o administrador criar uma nova viagem//Para fazermos login como administradorimport react from 'react-router-dom'
import { InputArea,ScreenContainer, ContainerArea, Title, BtnButton } from './styledAppForm'
import { goToListTripPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


export const AppFormPage = () => {
    const navigate = useNavigate()
    return (
        <ScreenContainer>
            <ContainerArea>
            <Title>Inscrição para Viagem</Title>
            <select placeholder='Escolha um planeta'>
            <option>Marte</option>           
            <option>Venus</option>
            <option>Plutão</option>
            <option>Saturno</option>
            </select>
            <InputArea type='text' placeholder='Nome' required/>
            <InputArea type='number' placeholder='Idade' min={18} required/>
            <InputArea type='text' placeholder='Texto Candidatura'/>
            <InputArea type='text' placeholder='Profissão'/>
            <select placeholder='Escolha um País'>
            <option>Galaxia de Tatus</option>           
            <option>Galaxia Androgena</option>
            </select>
            <BtnButton>Confirmar Inscrição</BtnButton>
            <BtnButton onClick={() => goToListTripPage(navigate)}>Voltar para viagens</BtnButton>

            </ContainerArea>
        </ScreenContainer>
    )
}