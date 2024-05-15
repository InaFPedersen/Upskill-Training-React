import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import SkillList from './components/SkillList';

const App = () => {
  return (
    <div className="card">
      <Avatar />
      {/* image*/}
      <div className="data">
        <Intro name="Ina F. Pedersen" /> {/* title and summary*/}
        {/* Should contain one skill component for each web dev skill that you have, customized with props */}
        <SkillList />
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
