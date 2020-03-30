import React from 'react';

import s from './AsideRight.module.scss';
import Check from '../../img/check.svg';
import Ads from '../../img/ads.jpg';
import Text from '../elements/Text/Text';

const AsideRight = () => {
  return (
    <aside className={s.aside}>
      <Text type="bold" className={s.bold_text}>
        Подпишитесь на обновления
      </Text>
      <form action="">
        <input type="email" placeholder="Ваш Email" />
        <button>
          <img src={Check} alt="button check icon" />
        </button>
      </form>
      <div>
        <img src={Ads} alt="ads banner" />
      </div>
    </aside>
  );
};

export default AsideRight;
