import React from 'react';
import './Landing.css'

import CardList from './CardList';

const Landing = () => {
  return (
    <div className="landing">
      <header className="header">
        Magic Cards
      </header>
      <div className="card-list">
        <CardList />
      </div>
    </div>
  );
}

export default Landing;