import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const API_KEY = 'b71d01c5ac7f396a3aef6335ea93ca1e'

const Search = () => {
  const {query} = useParams()

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    )

    const data = await response.json()

    if (data.results) {
      setMovies(data.results)
    }
  }

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, [query])

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Search
