import Smiley from '../assets/img/tears_of_happiness.png';
import './DepositPage.css';

export const DepositPage = (): JSX.Element => {
  return (
    <div className="deposit">
      <div className="deposit__smiley">
        <img src={Smiley} alt="Smiley" />
      </div>
      <div className="deposit__text">
        <h2>Дорогой Друг!!!</h2>
        <p>
          Мы очень много трудились, <span>{<br/>}</span> днем мы работали, а по ночам учились,<span>{<br/>}</span> мы так сильно старались,
          но все ровно не успели сделать эту страницу.
        </p>
        <p>Просим понять и простить :)</p>
      </div>
    </div>
  );
};
