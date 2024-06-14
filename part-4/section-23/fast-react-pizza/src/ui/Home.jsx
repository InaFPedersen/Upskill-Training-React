import CreateUser from '../features/user/CreateUser'

function Home() {
  return (
    <div className='my-10 sm:my-16 text-center px-4'>
      <h1 className="mb-8 text-xl font-semibold text-center md:text-3xl">
        The best pizza.
        <br />
        <span className="text-sky-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
