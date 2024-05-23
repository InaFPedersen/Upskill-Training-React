import Summary from './Summary';
import WatchedMovieList from './WatchedMovieList';

const WatchedBox = ({ average, watched, isOpen, onIsOpen }) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => onIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && (
        <>
          <Summary average={average} watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
