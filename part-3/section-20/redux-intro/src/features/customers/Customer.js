import { useSelector } from 'react-redux';

function Customer() {
  const customer = useSelector((store) => store.customer);
  console.log(customer);

  const customerFullName = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customerFullName}</h2>;
}

export default Customer;
