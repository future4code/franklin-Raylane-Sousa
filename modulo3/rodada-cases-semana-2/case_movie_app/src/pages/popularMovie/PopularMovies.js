import { useState, useEffect } from "react";
import MovieCard from "../../components/moviecard/MovieCard";
import api from "../../services/api";
import '../MoviesGrid.css'
import{AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Button, Container, Title } from "./PopularMoviesStyled";

const API_KEY = process.env.REACT_APP_API_KEY

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1)

  const goToNext = () => {
    setPage(page + 1)
  
  }

  const goBack = () => {
      setPage(page - 1)
  }

  const takeMoviesPopular = () => {
    api.get(`movie/popular?${API_KEY}&language=pt-BR&page=${page}`)
    .then((res) => {
      setPopularMovies(res.data.results.slice(0,9))
    }).catch((error) => {
      console.log(error.code)
    })
}


useEffect(takeMoviesPopular, [page])

  return (
      <Container>
          <Title className="title">Filmes populares no momento</Title>
        <div div className="topMovies">
            {popularMovies.length > 0 && popularMovies.map((pm) =>
              <MovieCard key={pm.id} movie={pm}/>
            )}
        </div>
        <div>
        <Button onClick={goBack}><AiOutlineArrowLeft/></Button>
        <Button  onClick={goToNext}><AiOutlineArrowRight/></Button>
        </div>
    </Container>
  )
};

export default PopularMovies;
