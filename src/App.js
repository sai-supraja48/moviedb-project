import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import Search from './pages/Search'
import MovieDetails from './pages/MovieDetails'

const App = () => (
  <>
    <Navbar />

    <Switch>
      <Route exact path="/">
        <Popular />
      </Route>

      <Route path="/top-rated">
        <TopRated />
      </Route>

      <Route path="/upcoming">
        <Upcoming />
      </Route>

      <Route path="/search/:query">
        <Search />
      </Route>

      <Route path="/movie/:id">
        <MovieDetails />
      </Route>
    </Switch>
  </>
)

export default App
