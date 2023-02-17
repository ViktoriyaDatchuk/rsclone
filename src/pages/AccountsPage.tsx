import { useEffect, useState } from 'react';
import { AccountsForm } from '../components/AccountsForm/AccountsForm';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { AccountHeader } from '../interfaces/Account';
import type { Account } from '../interfaces/Account';
import { AccountsTransaction } from '../interfaces/interfaces';
import './Pages.css';

export const AccountsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [transaction, setTransaction] = useState(AccountsTransaction.Add);
  const [account, setAccount] = useState<Account[]>(
    JSON.parse(localStorage.getItem('accounts')!) ?? []
  );
  const [selected, setSelected] = useState<Item>();

  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(account));
  }, [account]);

  const updateSelected = (value: Item): void => {
    setSelected(value);
  };

  const updateAccount = (value: Account[]): void => {
    setAccount(value);
  };

  return (
    <div className="table-container">
      <Table
        items={account}
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
          setAccount(account.filter((item) => item.id !== (selected as Account)?.id));
        }}
        onToggleEdit={() => {
          if (account.length !== 0) {
            setModal(true);
            setTransaction(AccountsTransaction.Change);
          }
        }}
      >
        {modal && (
          <AccountsForm
            transaction={transaction}
            selected={selected}
            numberItems={account.length}
            onClose={() => {
              setModal(false);
            }}
            setAccount={updateAccount}
            account={account}
          />
        )}
      </ActionsBlock>
    </div>
  );
};
