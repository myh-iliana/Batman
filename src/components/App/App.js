import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';

import s from './App.module.scss';
import Header from '../Header/Header';
import HeroContent from '../HeroContent/HeroContent';
import AsideLeft from '../AsideLeft/AsideLeft';
import Container from '../elements/Container/Container';
import Nav from '../Nav/Nav';
import VisibleContent from '../VisibleContent/VisibleContent';
import AsideRight from '../AsideRight/AsideRight';

const App = () => {
  return (
    <BrowserRouter basename='/Batman'>
      <div>
        <Header />

        <main>
          <HeroContent />

          <Container>
            <div className={s.content}>
              <AsideLeft />

              <div className={s.info}>
                <Nav />

                <div className={s.wrapper}>
                  <VisibleContent />
                  <AsideRight />
                </div>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
