import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-300 text-stone-800 uppercase p-4">
      <p className='font-semi-bold text-stone-600 space-x-4'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
