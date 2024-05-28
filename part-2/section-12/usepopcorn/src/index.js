import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} size={24} color="#f00" />
    <StarRating maxRating={10} defaultRating={5} />
    <StarRating color="#00f" /> */}
  </React.StrictMode>
);
