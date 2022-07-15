import axios from 'axios'
import React, {useState} from 'react'
import { BtnButton, CreateContainer, InputArea } from './StyledCreatePlaylist'
import { useNavigate } from 'react-router-dom'
import { GoToPlayLists } from '../../routes/coordinator'

export const CreatePlaylist = () => {
const [inputPlaylist, setInputPlaylist] = useState('')
const navigate = useNavigate()

  const criaPlaylist = () =>  {
    const body = {name: inputPlaylist}
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'raylane-sousa-franklin'
      }
    }).then((response) => {
        console.log(response)
        alert('Playlist criada com sucesso!')
        setInputPlaylist('')
    }).catch((error) => {
        console.log(error.code)
    })

  }

  const handleInputName = (event) => {
    setInputPlaylist(event.target.value)
  }


  return (
    <CreateContainer>
      <h1>Criar Playlist</h1>

      <InputArea value={inputPlaylist} onChange={handleInputName} placeholder={'Digite o nome da playlist'}/>
      <BtnButton onClick={criaPlaylist}>Criar Playlist</BtnButton>
      <BtnButton onClick={() => GoToPlayLists(navigate)}>Playlists criadas</BtnButton> 

      
    </CreateContainer>
  );
}

