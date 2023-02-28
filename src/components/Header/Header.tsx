import type { ReactElement } from 'react';
import './Header.css';
import { HeaderButton } from '../HeaderButton/HeaderButton';
import HeaderIcon from '../../assets/img/headerIcon.png';
import { HeaderList } from '../../options/HeaderList';
import { Link } from 'react-router-dom';

export const Header = (): ReactElement => {
  return (
    <header>
      <div className="header__title">
        <img src={HeaderIcon} alt={HeaderIcon} className="title__image" />
        <h1>Домашняя бухгалтерия</h1>
      </div>
      <div className="header__container">
        {Object.entries(HeaderList).map((button) => (
          <Link to={button[1][1]} className="header__link" key={button[0]}>
            <HeaderButton image={button[1][0]} title={button[0]} />
          </Link>
        ))}
      </div>
    </header>
  );
};
