import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const onSearch = () => {
    if (search.trim() !== '') {
      history.push(`/search/${search}`)
    }
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>movieDB</h1>
      </Link>

      <div className="nav-links">
        <Link to="/">Popular</Link>

        <Link to="/top-rated">Top Rated</Link>

        <Link to="/upcoming">Upcoming</Link>
      </div>

      <div>
        <input
          type="search"
          placeholder="Search Movie"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="button" onClick={onSearch}>
          Search
        </button>
      </div>
    </nav>
  )
}

export default Navbar
