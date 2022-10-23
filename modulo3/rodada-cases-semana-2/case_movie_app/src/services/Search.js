import { useEffect, useState} from "react"
import {useSearchParams} from 'react-router-dom'
import MovieCard from "../components/moviecard/MovieCard"
import '../pages/MoviesGrid.css'
import api from "./api"

const API_KEY = process.env.REACT_APP_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const [wantedMovie, setWantedMovie] = useState([])
  const query = searchParams.get('q')
 

  const searchMovie = () => {
 
    api.get(`search/movie/?${API_KEY}&query=${query}`)
    .then((res) => {
      setWantedMovie(res.data.results)
    }).catch((error) => {
      console.log(error.code)
    })
}

  useEffect(searchMovie, [query]) //trazer para dentro do use effect renderiza a busca com outra ativa 

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="topMovies">
          {wantedMovie.length === 0 && <p>loading...</p>}
          {wantedMovie.length > 0 && wantedMovie.map((movie) =>
              <MovieCard key={movie.id} movie={movie}/>
          )}
      </div>
    </div>
  )
}

export default Search