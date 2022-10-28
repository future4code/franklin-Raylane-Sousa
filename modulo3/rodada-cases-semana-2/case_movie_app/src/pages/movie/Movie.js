import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import MovieCard from "../../components/moviecard/MovieCard";
import { Button, Content, MovieCardS, Trailer, TrailerTitle} from "./styledMovie";
import api from "../../services/api";
import YouTube from "react-youtube";

const API_KEY = process.env.REACT_APP_API_KEY

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] =useState(null)
  const [selected, setSelected] = useState({})
  const [playTrailer, setPlayTrailer] = useState(false)
  const IMG = `https://image.tmdb.org/t/p/original`

  const takeMovie = () => {
    api.get(`movie/${id}?${API_KEY}`)
    .then((res) => {
      setSelected(res.data)
      setMovie(res.data)
    }).catch((error) => {
      console.log(error.code)
    })
  }

  useEffect(takeMovie, [id])

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', 
    {style: 'currency', currency: "USD"} 
    )
  }

  const takeMTrailer = async (id) => {
    api.get(`movie/${id}?${API_KEY}&append_to_response=videos`)
    .then((res) => {
      return res.data.results
    }
    )
    .catch((error) => {
      console.log(error.code)
    })
  }


  const selectedM = async () => {
    const data = await takeMTrailer(movie.id)
    setSelected(data)
  }

  const renderTrailer = async () => {
    return (
      <YouTube
        videoId = {selected.key}
      />
    )
  }
 

  return (
    <>
      {movie && (
        <>
        <Trailer style={{backgroundImage: `url('${IMG}${selected.backdrop_path}')`}} >
          <Content>
            {playTrailer === true ? renderTrailer(): null}
            <Button onClick={() => setPlayTrailer(true)}>Trailer</Button>
            <TrailerTitle>{selected.title}</TrailerTitle>
            {selected.overview ? <p>{selected.overview}</p> : null}
          </Content>
        </Trailer>

        <MovieCardS>
        <MovieCard  movie={movie} showLink={false} selectedMovie={selectedM}/>
        <p className="tagLine">{movie.tagline}</p>
        <div className="info">
          <h3>
          <BsWallet2/> Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>

        <div className="info">
          <h3>
          <BsGraphUp/> Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>

        <div className="info">
          <h3>
          <BsHourglassSplit/> Duração:
          </h3>
          <p>{movie.runtime}</p>
        </div>
        
        <div className="info">
          <h3>
          <BsFillFileEarmarkTextFill/> Description:
          </h3>
          <p>{movie.overview}</p>
        </div>
        </MovieCardS>
        </>
        )}
    </>
  )
}

export default Movie