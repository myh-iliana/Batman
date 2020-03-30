import React from 'react';

import s from './HeroContent.module.scss';
import Container from '../elements/Container/Container';
import Play from '../../img/play.svg';
import Down from '../../img/down.svg';

const HeroContent = () => {
  return (
    <div className={s.hero_content}>
      <Container>
        <h1 className={`${s.title} animated bounceInRight`}>Бэтмен</h1>
        <h3 className={`${s.subtitle} animated bounceInLeft`}>The Batman</h3>
        <div className={`${s.wrapper} animated fadeInUp delay-1s`}>
          <div className={s.info}>
            <div className={s.tag}>Фильм</div>
            <div className={s.when}>США, 2021 год</div>
            <a
              data-fancybox
              href="https://www.youtube.com/watch?v=Xo8i2ZDMlQg"
              className={s.play_button}
            >
              <img src={Play} alt="play button" />
              <p className="play-button__text">Смотреть трейлер</p>
            </a>
          </div>
          <div className={s.more}>
            <p>Подробнее</p>
            <img src={Down} alt="down arrow" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroContent;
