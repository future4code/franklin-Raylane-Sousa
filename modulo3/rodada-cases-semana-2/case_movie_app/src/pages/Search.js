import { useEffect, useState} from "react"
import {useSearchParams} from 'react-router-dom'
import MovieCard from "../components/moviecard/MovieCard"
import './MoviesGrid.css'

const API_KEY = process.env.REACT_APP_API_KEY
const SEARCH_URL = process.env.REACT_APP_SEARCH;

const Search = () => {
  const [searchParams] = useSearchParams()

  const [queryMovies, setQueryMovies] = useState([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json() //retorno dos dados

    setQueryMovies(data.results)
}

useEffect(() => {
  const searchQueryUrl =`${SEARCH_URL}?${API_KEY}&query=${query}`
  console.log(searchQueryUrl)
  getSearchedMovies(searchQueryUrl)
}, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="topMovies">
          {queryMovies.length === 0 && <p>loading...</p>}
          {queryMovies.length > 0 && queryMovies.map((movie) =>
              <MovieCard key={movie.id} movie={movie}/>
          )}
      </div>
    </div>
  )
}

export default Search