import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <p>Some name</p>
    </header>
  );
}

export default Header;
