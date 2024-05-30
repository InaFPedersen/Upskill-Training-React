import { useEffect, useRef } from 'react';

const Search = ({ query, onQuery }) => {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === 'Enter') {
          inputEl.current.focus();
          onQuery('');
        }
      }

      document.addEventListener('keydown', callback);
      return () => document.addEventListener('keydown', callback);
    },
    [onQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default Search;
