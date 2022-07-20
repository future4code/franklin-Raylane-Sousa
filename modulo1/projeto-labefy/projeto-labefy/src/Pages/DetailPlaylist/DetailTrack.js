import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ListaContainer, Lista, Link, BtnButton, InputArea} from "./styledDetail";
import { GoToPlayLists } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const DetailTrack = () => {
  const [tracks, setTracks] = useState([]);
  const [inputTrack, setInputTrack] = useState('')
  const [inputArtist, setInputArtist] = useState('')
  const [inputUrl, setInputUrl] = useState('')
  const { id } = useParams(); //variavel params que armazena o id da url
  const navigate = useNavigate()

  const trackDetails = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "raylane-sousa-franklin",
          },
        }
      )
      .then((response) => {
        // console.log(response.data.result.tracks);
        setTracks(response.data.result.tracks);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(trackDetails, [tracks]);

  //add

  
      const addTrackPlayList = (id) =>  {
        const body = {name: inputTrack, artist: inputArtist, url: inputUrl}
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/${id}/tracks`, body, {
          headers: {
            Authorization: 'raylane-sousa-franklin'
          }
        }).then((response) => {
            console.log(response)
            alert('Música adicionada a Playlist!')
            setInputTrack('')
            setInputArtist('')
            setInputUrl('')
        }).catch((error) => {
            console.log(error.code)
        })
    
      }
    
      const handleInputTrack = (event) => {
        setInputTrack(event.target.value)
      }
    
      const handleInputArtist = (event) => {
        setInputArtist(event.target.value)
      }
    
      const handleInputUrl = (event) => {
        setInputUrl(event.target.value)
      }
    

  return (
    <ListaContainer>
      <h1>Músicas Playlist</h1>
      {tracks &&
        tracks.map((music) => {
          return (
            <Lista key={music.id}>
              <p>{music.name}</p>
              <p>{music.artist}</p>
              <Link href={music.url} target='blank'>Link música</Link>
            </Lista>
          );
        })}

        <h1>Adicionar música a playlist</h1>

        <InputArea value={inputTrack} onChange={handleInputTrack} placeholder={'Música'}/>
        <InputArea value={inputArtist} onChange={handleInputArtist} placeholder={'Artista'}/>
        <InputArea value={inputUrl} onChange={handleInputUrl} placeholder={'Link da música'}/>
        <BtnButton onClick={addTrackPlayList}>Adicionar Música</BtnButton>
        <BtnButton onClick={() => GoToPlayLists(navigate)}>Playlists criadas</BtnButton> 
        <BtnButton onClick={() => GoToPlayLists(navigate)}>Voltar</BtnButton>
    </ListaContainer>
  );
};