import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator";
import { UserListContainer, BtnButton, InputArea, Lista, Title} from "./StyledUserList";

export const UserList = () => {
const [users, setUsers] = useState([])
const [userFilter, setUserFilter] = useState('')
const navigate = useNavigate()

const userListNames = () =>  {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`, {
      headers: {
        Authorization: '"raylane-sousa-franklin"'
      }
    }).then((response) => {
        console.log(response)
        setUsers(response.data)
     
    }).catch((error) => {
        console.log(error.code)
    })
}
useEffect(userListNames, [])

const userFilterName = () =>  {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${userFilter}`,{
      headers: {
        Authorization: '"raylane-sousa-franklin"'
      }
    }).then((response) => {
        console.log(response.data[0].name)
        setUserFilter(response.data[0].name)
        alert("Encontrado!")
        setUserFilter('')
    
    }).catch((error) => {
        console.log(error.code)
       alert("Não encontrado!")
    })
}

const handleInputFilter = (event) => {
    setUserFilter(event.target.value)
}


    return(
        <UserListContainer>
            <Title>User List</Title>
            {users.map((listaUsers) => {
            return <Lista key={listaUsers.id}>{listaUsers.name}</Lista>
            })}
            
            <InputArea value={userFilter} onChange={handleInputFilter} placeholder="Buscar usuário"/>
            <BtnButton onClick={userFilterName}>Buscar Usuário</BtnButton>
            <BtnButton onClick={() => goToSignUp(navigate)}>Voltar para cadastro</BtnButton>
           

        </UserListContainer>
    )
}
