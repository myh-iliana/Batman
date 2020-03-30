import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import s from './App.module.scss';
import Header from '../Header/Header';
import HeroContent from '../HeroContent/HeroContent';
import AsideLeft from '../AsideLeft/AsideLeft';
import Container from '../elements/Container/Container';
import Nav from '../Nav/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <main>
          <HeroContent />

          <Container>
            <div className={s.content}>
              <AsideLeft />

              <div className={s.info}>
                <Nav />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
