import type { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import type { Account } from '../../interfaces/Account';
import { BlockButtonElement } from '../ActionBlock/BlockButton/BlockButtonElement';
import type { Item } from '../Table/Table';
import './TransactionsForm.css';
import expensesValue from '../../options/expensesValue';
import { costs, saveCosts } from '../../store/CostsStore';

const portal = document.getElementById('portal') as HTMLElement;

export const TransactionForm = ({
  selected,
  availableAccounts,
  closeForm,
}: {
  selected?: Item;
  availableAccounts?: Account[];
  closeForm: () => void;
}): ReactElement => {
  const submit = (): void => {
    const form = document.querySelector('.transaction__form') as HTMLFormElement;
    const formData = new FormData(form);
    const date = (formData.get('date') as string).split('-').reverse().join('-');
    const account = formData.get('account') as string;
    const category = formData.get('category') as string;
    const subcategory = formData.get('subcategory') as string;
    const quantity = +(formData.get('quantity') as string);
    const unit = formData.get('unit') as string;
    const amount = +(formData.get('amount') as string);
    const note = formData.get('note') as string;

    costs.push({ date, account, category, subcategory, quantity, unit, amount, note });
    saveCosts();
    closeForm();
  };

  return ReactDOM.createPortal(
    <div className="transaction__modal">
      <div className="transaction__card">
        <h4 className="modal__title">Карточка расхода</h4>

        <form className="transaction__form">
          <label className="transaction__label">
            Дата
            <input
              type="date"
              name="date"
              className="transaction__date"
              defaultValue={new Date().toLocaleDateString().split('.').reverse().join('-')}
            />
          </label>
          <label className="transaction__label">
            Списать со счета{' '}
            <select name="account" className="transaction__account">
              {availableAccounts?.map((account, index) => {
                return (
                  <option key={index} value={account.account}>
                    {account.account}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="transaction__label">
            Категория
            <select name="category" className="transaction__category">
              <option value=""></option>
              {expensesValue.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </label>
          <label className="transaction__label">
            Подкатегория
            <input type="text" name="subcategory" className="transaction__subcategory"></input>
          </label>
          <label className="transaction__label">
            Сумма
            <input type="number" name="amount" className="transaction__amount" step={0.01}></input>
          </label>
          <label className="transaction__label">
            Количество
            <input type="number" name="quantity" className="transaction__quantity" step={1} />
            <input type="text" name="unit" className="transaction__unit" placeholder="единиц" />
          </label>
          <label className="transaction__label">
            Примечание
            <textarea name="note" className="transaction__note"></textarea>
          </label>
        </form>
        <div className="transaction__button-container">
          <BlockButtonElement name="ОК" func={submit} />
          <BlockButtonElement name="Отмена" func={closeForm} />
        </div>
      </div>
    </div>,
    portal
  );
};
