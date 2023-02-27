import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BlockButtonElement } from '../ActionBlock/BlockButton/BlockButtonElement';
import type { AccountsFormProps } from '../../interfaces/propsTypes';
import type { Account } from '../../interfaces/Account';
import { AccountsTransaction } from '../../interfaces/interfaces';
import { accounts } from '../../store/AccountsStore';
import { maxNumber } from '../../utils/maxNumber';
import './AccountsForm.css';

const currency = 'Рубли';

const portal = document.getElementById('portal') as HTMLElement;

export const AccountsForm = ({
  transaction,
  selected,
  onClose,
}: AccountsFormProps): ReactElement => {
  const [name, setName] = useState(selected?.account ?? '');
  const [number, setNumber] = useState(
    String((selected as Account)?.id) || (accounts.length !== 0 ? maxNumber(accounts) + 1 : '1')
  );
  const [date, setDate] = useState(new Date().toLocaleDateString().split('.').reverse().join('-'));
  const [summ, setSumm] = useState(String((selected as Account)?.balance) || '0.00');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (transaction === AccountsTransaction.Add) {
      setName('');
      setNumber(String(accounts.length !== 0 ? maxNumber(accounts) + 1 : '1'));
      setSumm('0.00');
    }
  }, []);

  const cancelFunction = (event: React.FormEvent): void => {
    event.preventDefault();
    onClose();
  };

  const submitFunction = (event: React.FormEvent): void => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setError('Введите название счета');
    } else {
      if (transaction === AccountsTransaction.Add) {
        const NewAccount: Account = {
          id: +number,
          account: name,
          consumption: 0,
          income: 0,
          other: 0,
          balance: +summ,
          note,
        };
        accounts.push(NewAccount);
        onClose();
      } else {
        accounts.map((item) => {
          if (item.id === (selected as Account).id) {
            item.account = name;
            item.balance = +summ;
            item.note = note;
          }
          return item;
        });
        onClose();
      }
    }
  };

  return ReactDOM.createPortal(
    <div className="accounts__modal">
      <div className="accounts__modal__content">
        <h4 className="modal__title">{transaction} счета</h4>
        <form className="modal__form">
          <fieldset>
            <legend>Название счета</legend>
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Например: наличные, счет в банке и т.п."
              className="input__accountName"
            ></input>
            {error && <div className="error__message">{error}</div>}
          </fieldset>
          <fieldset className="halfWidtElement">
            <legend>Порядковый номер счета</legend>
            <input
              disabled={transaction !== AccountsTransaction.Add}
              type="number"
              min={1}
              value={number}
              onChange={(event) => {
                setNumber(event.target.value);
              }}
            ></input>
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
                  <td>
                    <input
                      type="date"
                      value={date}
                      onChange={(event) => {
                        setDate(event.target.value);
                      }}
                      className="input__table"
                    ></input>
                  </td>
                  <td>
                    <input
                      type="number"
                      min={0.0}
                      step={0.01}
                      value={summ}
                      onChange={(event) => {
                        setSumm(event.target.value);
                      }}
                      className="input__table"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
          <fieldset>
            <legend>Примечание</legend>
            <textarea
              rows={4}
              value={note}
              onChange={(event) => {
                setNote(event.target.value);
              }}
            ></textarea>
          </fieldset>
          <div className="button__container">
            <BlockButtonElement name="ОК" func={submitFunction} />
            <BlockButtonElement name="Отмена" func={cancelFunction} />
          </div>
        </form>
      </div>
    </div>,
    portal
  );
};
