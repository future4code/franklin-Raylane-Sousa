//Para vermos todas as viagens
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {goToDetailTrip, goToLogin, goToCreateTrip} from '../../routes/coordinator'
import { useNavigate} from 'react-router-dom';
import { BtnButton, ContainerArea, ScreenContainer, Title } from './styledHome'

const useProtectedPage = () => {
const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      goToLogin(navigate);
    }
  }, [navigate]);
};


export const AdminHomePage = () => {
useProtectedPage()

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

  const aoDetalhar = (id) => {
    goToDetailTrip(navigate, id)
}
  return (
    <div>
    <Title>ADMIN LABEX</Title>
    <BtnButton onClick={() => goToCreateTrip(navigate)}>Criar Viagem</BtnButton>
    <ScreenContainer>
     {tripList.map((trip) => {
        return <ContainerArea key={trip.id}>
        <p>{trip.planet}</p> 
        <p>{trip.name}</p>
        <p>{trip.date}</p>
        <p>{trip.description}</p>
        <p>{trip.durationInDays}</p>
        <BtnButton onClick={() => aoDetalhar(trip.id)}>Detalhar Viagem</BtnButton>
        </ContainerArea> 
      })}

    </ScreenContainer>
    </div>
  );
}
