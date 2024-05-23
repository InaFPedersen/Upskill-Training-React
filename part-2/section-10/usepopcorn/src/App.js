import { useState } from 'react';
import { tempMovieData } from './data/tempMovieData';
import { tempWatchedData } from './data/tempWatchedData';
import Navbar from './components/Navbar';
import Main from './components/Main';
import NumberResult from './components/NumberResult';
import Logo from './components/Logo';
import Search from './components/Search';
import Box from './components/Box';
import List from './components/List';
import Summary from './components/Summary';
import WatchedMovieList from './components/WatchedMovieList';

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState('');

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} onQuery={setQuery} />
        <NumberResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <List movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
