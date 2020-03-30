import React from 'react';

import './App.scss';
import Header from '../Header/Header';
import HeroContent from '../HeroContent/HeroContent';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <HeroContent />
      </main>
    </div>
  );
};

export default App;
