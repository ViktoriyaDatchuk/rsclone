import type { ReactElement } from 'react';
import './footer.css';
import type { FooterProps } from '../../interfaces/propsTypes';
import GithubLogo from '../../assets/img/github-logo.svg';
import RsLogo from '../../assets/img/rs_school_js.svg';

interface User {
  name: string;
  link: string;
  img: string;
}
const users: User[] = [
  { name: '@viktoriyadatchuk', link: 'https://github.com/viktoriyadatchuk', img: GithubLogo },
  { name: '@proboynick', link: 'https://github.com/proboynick', img: GithubLogo },
  { name: '@ksenchik', link: 'https://github.com/ksenchik', img: GithubLogo },
  { name: '2023 «JavaScript/Front-end»', link: 'https://rs.school/js/', img: RsLogo },
];

function FooterElement({ name, link, img }: FooterProps): ReactElement {
  return (
    <div className="footer__social">
      <img className="footer__social-img" src={img} alt="" />
      <a className="footer__social-text" href={link}>
        {name}
      </a>
    </div>
  );
}

export function Footer(): ReactElement {
  return (
    <div className="footer">
      <div>
        <FooterElement img={users[0].img} link={users[0].link} name={users[0].name} />
        <FooterElement img={users[1].img} link={users[1].link} name={users[1].name} />
        <FooterElement img={users[2].img} link={users[2].link} name={users[2].name} />
      </div>
      <FooterElement img={users[3].img} link={users[3].link} name={users[3].name} />
    </div>
  );
}
