import { useState } from 'react';
import Logo from './Logo';
import Search from './Search';
import NumberResult from './NumberResult';

const Navbar = ({ movies }) => {
  const [query, setQuery] = useState('');

  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} onQuery={setQuery} />
      <NumberResult movies={movies} />
    </nav>
  );
};

export default Navbar;
