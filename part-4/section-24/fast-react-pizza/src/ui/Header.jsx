import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className='bg-sky-200 uppercase px-4 py-3 border-b-2 border-stone-200 sm:px-6 flex items-center justify-between font-pizza'>
      <Link to="/" className='tracking-widest'>Fast React Pizza Co.</Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
