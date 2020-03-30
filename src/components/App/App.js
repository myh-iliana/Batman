import React from 'react';

import s from './App.module.scss';
import Header from '../Header/Header';
import HeroContent from '../HeroContent/HeroContent';
import AsideLeft from '../AsideLeft/AsideLeft';
import Container from "../elements/Container/Container";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <HeroContent />

        <Container>
          <div className={s.content}>
            <AsideLeft />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default App;
