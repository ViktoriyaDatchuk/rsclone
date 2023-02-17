import type { FooterProps } from '../../interfaces/propsTypes';
import type { ReactElement } from 'react';

export function FooterElement({ name, link, img }: FooterProps): ReactElement {
  return (
    <div className="footer__social">
      <img className="footer__social-img" src={img} alt="" />
      <a className="footer__social-text" target="_blank" rel="noopener noreferrer" href={link}>
        {' '}
        {name}
      </a>
    </div>
  );
}
