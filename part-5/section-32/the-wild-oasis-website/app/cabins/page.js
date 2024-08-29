import Counter from '../components/Counter';

export default async function Page() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Cabins page</h1>

      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h3>Counter</h3>
      <Counter />
    </div>
  );
}
