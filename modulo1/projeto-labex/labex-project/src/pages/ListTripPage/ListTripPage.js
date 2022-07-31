//Para vermos todas as viagens
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { goToAppFormPage} from '../../routes/coordinator'
import { useNavigate} from 'react-router-dom';
import { BtnButton, ContainerArea, ScreenContainer, Title } from './styledListTripPage'

export const ListTripPage = () => {

const [tripList, setTripList] = useState([]);
const navigate = useNavigate()

//1-faz a requisição da api e retorna o nome das playlists
  const takeTrip = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/raylanenara/trips')
    .then((response) => {
      console.log(response.data.trips)
      setTripList(response.data.trips)
    }).catch((error) => {
      console.log(error.code)
    })

  }
  
  useEffect(takeTrip, [])

  const aoCandidatar = (id) => {
    goToAppFormPage(navigate, id)

}
  return (
    <div>
    <Title>Lista de Viagens</Title>
    <ScreenContainer>
     {tripList.map((trip) => {
        return <ContainerArea key={trip.id}>
        <p>{trip.planet}</p> 
        <p>{trip.name}</p>
        <p>{trip.date}</p>
        <p>{trip.description}</p>
        <p>{trip.durationInDays}</p>
        <BtnButton onClick={() => aoCandidatar(trip.id)}>Inscreva-se</BtnButton>
        </ContainerArea> 
      })}

    </ScreenContainer>
    </div>
  );
}
