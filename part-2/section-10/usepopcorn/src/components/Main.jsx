import { useState } from 'react';
import Listbox from './Listbox';
import WatchedBox from './Watchedbox';

const Main = ({ movies, watched, average }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      <Listbox isOpen={isOpen1} onIsOpen={setIsOpen1} movies={movies} />
      <WatchedBox
        average={average}
        watched={watched}
        isOpen={isOpen2}
        onIsOpen={setIsOpen2}
      />
    </main>
  );
};

export default Main;
