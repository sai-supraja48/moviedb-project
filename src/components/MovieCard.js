import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
  const {id, title, poster_path: posterPath, vote_average: voteAverage} = movie

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />

      <h3>{title}</h3>

      <p>Rating: {voteAverage}</p>

      <Link to={`/movie/${id}`}>
        <button type="button">View Details</button>
      </Link>
    </div>
  )
}

export default MovieCard
