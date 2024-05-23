import { useState } from 'react';
import { tempMovieData } from './data/tempMovieData';
import { tempWatchedData } from './data/tempWatchedData';
import Navbar from './components/Navbar';
import Main from './components/Main';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} watched={watched} average={average} />
    </>
  );
}
