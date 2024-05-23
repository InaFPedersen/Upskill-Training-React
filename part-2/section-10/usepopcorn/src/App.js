import { useState } from 'react';
import { tempMovieData } from './data/tempMovieData';
import { tempWatchedData } from './data/tempWatchedData';
import Navbar from './components/Navbar';
import Main from './components/Main';
import NumberResult from './components/NumberResult';
import Logo from './components/Logo';
import Search from './components/Search';
import Listbox from './components/Listbox';
import List from './components/List';
import WatchedBox from './components/Watchedbox';
import Summary from './components/Summary';
import WatchedMovieList from './components/WatchedMovieList';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

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
        <Listbox>
          <List movies={movies} />
        </Listbox>
        <WatchedBox>
          <Summary average={average} watched={watched} />
          <WatchedMovieList watched={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}
