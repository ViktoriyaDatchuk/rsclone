import type { ReactElement } from 'react'
import './footer.css'
import GithubLogo from "../../assets/img/github-logo.svg"
import RsLogo from "../../assets/img/rs_school_js.svg"

export function Footer(): ReactElement {
  return (
    <div className="footer">
      <div className=''>
         <div className='footer__social'>
            <a href='https://github.com/viktoriyadatchuk' target="_blank" rel="noreferrer">
               <img className='footer__social-img' src={GithubLogo} alt="Github" />
            </a>
            <p className='footer__social-name'>@viktoriyadatchuk</p>
         </div>
         <div className='footer__social'>
            <a href='https://github.com/proboynick' target="_blank" rel="noreferrer">
               <img className='footer__social-img' src={GithubLogo} alt="Github" />
            </a>
            <p className='footer__social-name'>@proboynick</p>
         </div>
         <div className='footer__social'>
            <a href='https://github.com/ksenchik' target="_blank" rel="noreferrer">
               <img className='footer__social-img' src={GithubLogo} alt="Github" />
            </a>
            <p className='footer__social-name'>@ksenchik</p>
         </div>
      </div>
      <div className='footer__course'>
         <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img className='footer__course-img' src={RsLogo} alt="RS-school" />
         </a>
         <p className='footer__social-name'>2023 «JavaScript/Front-end»</p>
      </div>
    </div>
  )
}
