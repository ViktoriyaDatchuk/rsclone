import { useEffect, useState } from 'react';
import { AccountsForm } from '../components/AccountsForm/AccountsForm';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { AccountHeader } from '../interfaces/Account';
import type { Account } from '../interfaces/Account';
import { AccountsTransaction } from '../interfaces/interfaces';
import { accounts, setAccounts } from '../store/store';
import './Pages.css';

export const AccountsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [myAccounts, setMyAccounts] = useState(accounts);
  const [transaction, setTransaction] = useState(AccountsTransaction.Add);
  const [selected, setSelected] = useState<Item>();

  useEffect(() => {
    setAccounts(myAccounts);
  }, [myAccounts]);

  const updateSelected = (value: Item): void => {
    setSelected(value);
  };

  return (
    <div className="table-container">
      <Table
        items={myAccounts}
        fieldNames={AccountHeader.fieldNames}
        fieldProperties={AccountHeader.fieldProperties}
        setSelected={updateSelected}
      />
      <ActionsBlock
        onToggleAdd={() => {
          setModal(true);
          setTransaction(AccountsTransaction.Add);
        }}
        onToggleDel={() => {
          setMyAccounts(myAccounts.filter((item) => item.id !== (selected as Account)?.id));
        }}
        onToggleEdit={() => {
          if (accounts.length !== 0) {
            setModal(true);
            setTransaction(AccountsTransaction.Change);
          }
        }}
      >
        {modal && (
          <AccountsForm
            transaction={transaction}
            selected={selected}
            onClose={() => {
              setModal(false);
            }}
          />
        )}
      </ActionsBlock>
    </div>
  );
};
