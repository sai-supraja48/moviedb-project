import {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = 'b71d01c5ac7f396a3aef6335ea93ca1e'

const Upcoming = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${page}`,
    )

    const data = await response.json()

    if (data.results) {
      setMovies(data.results)
    }
  }

  useEffect(() => {
    getMovies()

    // eslint-disable-next-line
  }, [page])

  return (
    <>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <p>{page}</p>

        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Upcoming
