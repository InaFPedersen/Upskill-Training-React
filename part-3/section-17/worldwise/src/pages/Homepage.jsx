import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Home</h1>

      {/* This will cause a re-render: <a href="/pricing">Pricing</a> */}

      {/* <Link to="/pricing">Pricing</Link> */}

      <Link to="/app">Go to the app!</Link>
    </div>
  );
}

export default Homepage;
