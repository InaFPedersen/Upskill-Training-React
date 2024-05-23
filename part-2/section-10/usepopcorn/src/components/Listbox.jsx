import List from './List';

const Listbox = ({ isOpen, onIsOpen, movies }) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => onIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && <List movies={movies} />}
    </div>
  );
};

export default Listbox;
