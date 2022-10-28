import { useState, useEffect } from "react";
import MovieCard from "../components/moviecard/MovieCard";
import api from "../services/api";
import{AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './MoviesGrid.css'
import { Button, Container, Title } from "./popularMovie/PopularMoviesStyled";

const API_KEY = process.env.REACT_APP_API_KEY

const TopRatedMovies = () => {
const [topMovies, setTopMovies] = useState([]);
const [page, setPage] = useState(1)

  const goToNext = () => {
    setPage(page + 1)
  
  }

  const goBack = () => {
      setPage(page - 1)
  }

const takeTopMovies = () => {
  api.get(`movie/top_rated?${API_KEY}&page=${page}`)
  .then((res)=> {
    setTopMovies(res.data.results.slice(0,9))
  }).catch((error)=>{
    console.log(error.code)
  })
}

useEffect(takeTopMovies, [page])

  return (
    <Container>
          <Title>Os melhores filmes do momento</Title>
          <div div className="topMovies">
              {topMovies.length > 0 && topMovies.map((pm) =>
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

export default TopRatedMovies;
