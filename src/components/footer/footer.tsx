import { FooterElement } from './FooterElement';
import { UsersFooter } from '../../options/UsersFooter';
import type { ReactElement } from 'react';
import './footer.css';



export function Footer(): ReactElement {
  return (
    <div className="footer">
      <div>
        <FooterElement
          img={UsersFooter[0].img}
          link={UsersFooter[0].link}
          name={UsersFooter[0].name}
        />
        <FooterElement
          img={UsersFooter[1].img}
          link={UsersFooter[1].link}
          name={UsersFooter[1].name}
        />
        <FooterElement
          img={UsersFooter[2].img}
          link={UsersFooter[2].link}
          name={UsersFooter[2].name}
        />
      </div>
      <FooterElement
        img={UsersFooter[3].img}
        link={UsersFooter[3].link}
        name={UsersFooter[3].name}
      />
    </div>
  );
}
