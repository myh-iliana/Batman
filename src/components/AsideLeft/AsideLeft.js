import React from 'react';

import s from './AsideLeft.module.scss';
import Cover from '../../img/cover.jpg';
import Text from "../elements/Text/Text";

const AsideLeft = () => {
  return (
    <aside className={s.aside}>
      <img src={Cover} alt="film cover" className='animated zoomInDown' />
      <button>Буду смотреть</button>
      <ul className={s.list}>
        <li><Text type='bold'>В главных ролях:</Text></li>
        <li>
          <a href="#">Роберт Паттинсон</a>
        </li>
        <li>
          <a href="#">Зои Кравиц</a>
        </li>
        <li>
          <a href="#">Колин Фаррелл</a>
        </li>
        <li>
          <a href="#">Питер Сарсгаард</a>
        </li>
        <li>
          <a href="#">Пол Дано</a>
        </li>
        <li>
          <a href="#">Энди Серкис</a>
        </li>
        <li>
          <a href="#">Джеффри Райт</a>
        </li>
        <li>
          <a href="#">Джон Туртурро</a>
        </li>
        <li>
          <a href="#">Макс Карвер</a>
        </li>
        <li>
          <a href="#">Кон О’Нилл</a>
        </li>
      </ul>
    </aside>
  );
};

export default AsideLeft;
