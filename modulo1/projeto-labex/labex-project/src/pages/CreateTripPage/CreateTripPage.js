//Formulário para o administrador criar uma nova viagem//Para fazermos login como administradorimport react from 'react-router-dom'
import { InputArea,ScreenContainer, ContainerArea, Title, BtnButton } from './styledCreateTrip'
import React, { useState } from 'react'
import axios from 'axios'

export const CreateTripPage = () => {
    const [inputName, setName] = useState('')
    const [inputPlanet, setPlanet] = useState('')
    const [inputDate, setDate] = useState('')
    const [inputDesc, setDesc] = useState('')
    const [inputDuration, setDuration] = useState('')

    const createTrip = () => {
        const body = {
            name: inputName,
            planet: inputPlanet,
            date: inputDate,
            description: inputDesc,
            durationInDays: inputDuration
        }
        const token = localStorage.getItem("token");
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/raylanenara/trips', body, {
            headers: {
              auth: token
            }
          })
        .then((response)=> {
            console.log("Deu certo", response.data.token)
            localStorage.setItem('token', response.data.token)
            setName("")
            setPlanet("")
            setDate("")
            setDesc("")
            setDuration("")
            alert("Viagem criada com sucesso!")

        }).catch((error)=>{
            console.log("Deu errado", error.response)

        })

    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanet(event.target.value)
    }
    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onChangeDesc = (event) => {
        setDesc(event.target.value)
    }

    const onChangeDuration = (event) => {
        setDuration(event.target.value)
    }

    return (
        <ScreenContainer>
            <ContainerArea>
            <Title>LABEX</Title>
            <InputArea type='text' value={inputName} placeholder='Nome da viagem' onChange={onChangeName}/>
            <InputArea type='text' value={inputPlanet} placeholder='Planeta' onChange={onChangePlanet}/>
            <InputArea type='date' value={inputDate} placeholder='dd/mm/aaaa' onChange={onChangeDate}/>
            <InputArea type='text' value={inputDesc} placeholder='Descrição' onChange={onChangeDesc}/>
            <InputArea type='text' value={inputDuration} placeholder='Descrição em dias' onChange={onChangeDuration}/>
            <BtnButton onClick={createTrip}>Criar viagem</BtnButton>
            </ContainerArea>
        </ScreenContainer>
    )
}