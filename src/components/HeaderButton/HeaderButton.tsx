import type { ReactElement } from 'react'
import type { HeaderButtonType } from '../../interfaces/propsTypes'
import './HeaderButton.css'

export const HeaderButton = ({ image, title }: HeaderButtonType): ReactElement => {
  return (
    <button className="header__button">
      <img src={image} alt={image} className="button__image"></img>
      <p className="button__text">{title}</p>
    </button>
  )
}
