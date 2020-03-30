import React from 'react';

import s from './Header.module.scss';
import Container from '../elements/Container/Container';
import SearchIcon from '../../img/search-icon.svg';
import Bookmark from '../../img/bookmark.svg';
import Avatar from '../../img/avatar.png';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <div className={s.logo}>КиноПульс</div>
          <form action="" className={s.search}>
            <input className='animated flipInX' type="search" placeholder="Фильмы, сериалы, актеры" />
            <button type="submit" className="search__button">
              <img src={SearchIcon} alt="search icon" />
            </button>
          </form>
          <div className={s.user}>
            <img src={Bookmark} alt="bookmark" className={s.user__bookmark} />
            <img src={Avatar} alt="user avatar" className={s.user__avatar} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
