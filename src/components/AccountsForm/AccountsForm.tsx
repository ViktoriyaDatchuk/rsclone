import type { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Images } from '../../options/AccountIcons';
import { getDate } from '../../utils/todayDate';
import { Dropdown } from '../Dropdown/dropdown';
import './AccountsForm.css';

enum AccountsTransaction {
  Add = 'Добавление',
  Change = 'Редактирование',
}

const currency = 'Рубли';

const portal = document.getElementById('portal') as HTMLElement;

export const AccountsForm = (): ReactElement => {
  return ReactDOM.createPortal(
    <div className="accounts__modal">
      <div className="accounts__modal__content">
        <h4 className="modal__title">{AccountsTransaction.Add} счета</h4>
        <form className="modal__form">
          <fieldset>
            <legend>Название счета</legend>
            <input
              type="text"
              placeholder="Например: наличные, счет в банке и т.п."
              className="input__accountName"
            ></input>
          </fieldset>
          <fieldset className="halfWidtElement">
            <legend>Иконка счета</legend>
            <Dropdown options={Images} />
          </fieldset>
          <fieldset className="halfWidtElement">
            <legend>Порядковый номер счета</legend>
            <input type="number" min={1}></input>
          </fieldset>
          <fieldset>
            <legend>Начальный баланс</legend>
            <table className="modal__table">
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Дата</th>
                  <th>Сумма</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{currency}</td>
                  <td>{getDate()}</td>
                  <td>
                    <input type="number" min={0.0} step={0.01} className="input__table"></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <fieldset>
            <legend>Примечание</legend>
            <textarea rows={4}></textarea>
          </fieldset>
          <div className="button__container"></div>
        </form>
      </div>
    </div>,
    portal
  );
};
