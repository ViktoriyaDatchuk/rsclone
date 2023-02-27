import classNames from 'classnames';
import type { ReactElement, SyntheticEvent } from 'react';
import type { HeaderButtonType } from '../../interfaces/propsTypes';
import { HeaderList } from '../../options/HeaderList';
import './HeaderButton.css';

export const HeaderButton = ({ image, title }: HeaderButtonType): ReactElement => {
  const buttonClickHandler = (e: SyntheticEvent<HTMLButtonElement>): void => {
    const buttons = document.querySelectorAll('.header__button');
    buttons.forEach((button) => {
      button.classList.remove('header__button-activ');
      if (button.id === e.currentTarget.id) {
        button.classList.add('header__button-activ');
      }
    });
  };
  return (
    <button
      id={title}
      className={classNames('header__button', {
        'header__button-activ':
          location.hash.slice(1) === HeaderList[title][1] ||
          (location.hash === '' && title === 'Счета'),
      })}
      onClick={buttonClickHandler}
    >
      <img src={image} alt={image} className="button__image"></img>
      <p className="button__text">{title}</p>
    </button>
  );
};
