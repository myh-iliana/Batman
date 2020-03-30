import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';
import Bookmark from '../../img/bookmark-filled.svg';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.list}>
        <NavLink to="/about" activeClassName={s.active}>
          Описание
        </NavLink>
        <NavLink to="/reviews" activeClassName={s.active}>
          Рецензии
        </NavLink>
        <NavLink to="/premieres" activeClassName={s.active}>
          Премьеры
        </NavLink>
        <NavLink to="/actors" activeClassName={s.active}>
          Актеры
        </NavLink>
        <NavLink to="/rewards" activeClassName={s.active}>
          Награды
        </NavLink>
        <NavLink to="/facts" activeClassName={s.active}>
          Факты
        </NavLink>
        <NavLink to="/sites" activeClassName={s.active}>
          Сайты
        </NavLink>
      </div>
      <img src={Bookmark} alt="nav bookmark flag" />
    </nav>
  );
};

export default Nav;
