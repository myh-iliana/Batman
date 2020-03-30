import React from 'react';
import { Route, Switch } from 'react-router-dom';

import s from './VisibleContent.module.scss';
import Text from '../elements/Text/Text';

const VisibleContent = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/premieres" component={Premieres} />
        <Route path="/actors" component={Actors} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/facts" component={Facts} />
        <Route path="/sites" component={Sites} />
      </Switch>
    </div>
  );
};

const About = () => {
  return (
    <div id="about">
      <Text>
        Предстоящий американский супергеройский фильм, основанный на одноимённых комиксах
        издательства DC Comics. Картина будет выпущена компанией Warner Bros. и будет перезагрузкой
        всех фильмов о Бэтмене.
      </Text>
      <Text>
        Фильм является десятым по счёту фильмом из Расширенной вселенной DC. Режиссёром и
        сценаристом фильма выступит Мэтт Ривз, а главную роль исполнит Роберт Паттинсон
      </Text>
      <Text type="bold" className={s.bold_text}>
        Разработка
      </Text>
      <Text>
        В октябре 2014 года студия Warner Bros. объявила, что в разработке находится сольный фильм о
        Бэтмене, роль которого вновь исполнит Бен Аффлек. В июле 2015 года сообщалось, что Аффлек
        ведёт переговоры со студией по поводу постановки фильма и совместного написания сценария с
        Джеффом Джонсом.
      </Text>
      <Text>
        После выхода фильма «Бэтмен против Супермена: На заре справедливости» руководитель агентства
        WME Патрик Уайтсел подтвердил, что Аффлек написал сценарий для сольного фильма о Бэтмене и в
        настоящий момент его рассматривают студия и DC. В мае 2016 года Джереми Айронс подтвердил,
        что он появится в фильме про Тёмного Рыцаря.
      </Text>
      <Text>
        На Comic-Con в Сан-Диего в июле 2016 года было официально подтверждено, что Аффлек станет
        режиссёром картины. В августе 2016 года на одной из страниц Аффлека в социальных сетях был
        опубликован тестовый материал, в котором был показан персонаж Детстроук. 8 сентября 2016
        года Джефф Джонс подтвердил, что Джо Манганьелло сыграет наёмника Слейда Уилсона, который,
        возможно, станет главным злодеем фильма.
      </Text>
    </div>
  );
};
const Reviews = () => {
  return (
    <div>
      <Text>Рецензии</Text>
    </div>
  );
};
const Premieres = () => {
  return (
    <div>
      <Text>Премьеры</Text>
    </div>
  );
};
const Actors = () => {
  return (
    <div>
      <Text>Актеры</Text>
    </div>
  );
};
const Rewards = () => {
  return (
    <div>
      <Text>Награды</Text>
    </div>
  );
};
const Facts = () => {
  return (
    <div>
      <Text>Факты</Text>
    </div>
  );
};
const Sites = () => {
  return (
    <div>
      <Text>Сайты</Text>
    </div>
  );
};

export default VisibleContent;
