import type { ReactElement } from 'react';
import { Images } from '../../options/AccountIcons';
import { Dropdown } from '../Dropdown/dropdown';
import './AccountsForm.css';

enum AccountsTransaction {
  Add = 'Добавление',
  Change = 'Редактирование',
}

export const AccountsForm = (): ReactElement => {
  return (
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
        </form>
      </div>
    </div>
  );
};
