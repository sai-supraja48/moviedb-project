import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const API_KEY = 'b71d01c5ac7f396a3aef6335ea93ca1e'

const MovieDetails = () => {
  const {id} = useParams()

  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])

  const getMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    )

    const data = await response.json()
    setMovie(data)
  }

  const getCastDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
    )

    const data = await response.json()

    if (data.cast) {
      setCast(data.cast)
    }
  }

  useEffect(() => {
    getMovieDetails()
    getCastDetails()

    // eslint-disable-next-line
  }, [id])

  return (
    <div className="movie-details-container">
      <div className="movie-info">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />

        <div>
          <h1>{movie.title}</h1>

          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>

          <p>
            <strong>Duration:</strong> {movie.runtime} mins
          </p>

          <p>
            <strong>Genre:</strong>{' '}
            {movie.genres?.map(each => each.name).join(', ')}
          </p>

          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>

          <p>{movie.overview}</p>
        </div>
      </div>

      <h2>Cast</h2>

      <div className="cast-container">
        {cast.map(each => (
          <div key={each.id} className="cast-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${each.profile_path}`}
              alt={each.name}
            />

            <p>{each.original_name}</p>

            <p>{each.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
