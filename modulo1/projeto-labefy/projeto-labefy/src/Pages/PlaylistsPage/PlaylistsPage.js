import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { goToCreate, goToDetailTrack} from '../../routes/coordinator';
import { BtnButton, ListContainer, PlayMusic } from './StyledPlaylist';
import { useNavigate, useParams } from 'react-router-dom';

export const PlaylistsPage = () => {

const [playlists, setPlaylists] = useState([]);
const navigate = useNavigate()
const params = useParams()

//1-faz a requisição da api e retorna o nome das playlists
  const pegaPlaylist = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'raylane-sousa-franklin'
      }
    }).then((response) => {
      console.log(response.data)
      setPlaylists(response.data.result.list)
    }).catch((error) => {
      console.log(error.code)
    })

  }

  const deletaPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'raylane-sousa-franklin'
      }
    }).then((response) => {
      console.log(response.data)
      pegaPlaylist()
    }).catch((error) => {
      console.log(error.code)
    })

  }
  
  useEffect(pegaPlaylist, [])

  const onClickPlaylist = (id) => {
    goToDetailTrack(navigate, id)

}


  return (
    <ListContainer>
      <h1>Minhas playlists</h1>
      <BtnButton onClick={() => goToCreate(navigate)}>Adicionar Playlist</BtnButton>
      
      
     {playlists.map((list) => {
       return <PlayMusic key={list.id}><p>{list.name}</p><BtnButton onClick={() => onClickPlaylist(list.id)}>Detalhar</BtnButton>
       <BtnButton onClick={() => deletaPlaylist(list.id)}>Deletar</BtnButton></PlayMusic> 
     })} 
    </ListContainer>
  );
}
