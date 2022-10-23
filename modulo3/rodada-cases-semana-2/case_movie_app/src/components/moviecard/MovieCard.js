import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PaMovie, TitleMovie, MovieCardS} from './MovieCardStyled'

const imageUrl = process.env.REACT_APP_IMG
const MovieCard = ({movie, showLink = true}) => {
  return (
    <MovieCardS key={movie.id} >
        <img src={imageUrl + movie.poster_path} alt={movie.title}/>
        {showLink && <TitleMovie>{movie.title}</TitleMovie>}
        {showLink && <PaMovie>
            <FaStar/> {movie.vote_average}
        </PaMovie> }
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </MovieCardS>
  )
}

export default MovieCard