import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../services/api";
import { Button } from "./MenuGenreStyled";

const API_KEY = process.env.REACT_APP_API_KEY

const MenuGenreList = () => {
    const [genreMovies, setGenreList] = useState([]);
    const navigate = useNavigate(); 

    const takeList = () => {
        api.get(`genre/movie/list?${API_KEY}&language=pt-BR`)
        .then((res) => {

          setGenreList(res.data.genres)
        }).catch((error) => {
          console.log(error.code)
        })
    
      }
      
      useEffect(takeList, [])

    return (
    <div>
        <div className="topMovies">
              {genreMovies.length > 0 && genreMovies.map((genre) =>
                    <Button key = {genre.id} onClick={()=>navigate(`/search?q=${genre.name}`)}>{genre.name}</Button>
              )}
        </div>
    </div>
    )
}

export default MenuGenreList