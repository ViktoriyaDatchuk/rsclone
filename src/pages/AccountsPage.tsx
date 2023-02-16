import { useState } from 'react';
import { AccountsForm } from '../components/AccountsForm/AccountsForm';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { Table } from '../components/Table/Table';
import { AccountHeader } from '../interfaces/Account';
import { AccountsTransaction } from '../interfaces/interfaces';
import { accounts } from '../stubs/Accounts';
import './Pages.css';

export const AccountsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [transaction, setTransaction] = useState(AccountsTransaction.Add);
  return (
    <div className="table-container">
      <Table
        items={accounts}
        fieldNames={AccountHeader.fieldNames}
        fieldProperties={AccountHeader.fieldProperties}
      />
      <ActionsBlock
        onToggleAdd={() => {
          setModal(true);
          setTransaction(AccountsTransaction.Add);
        }}
        onToggleDel={() => {
          console.log(2);
        }}
        onToggleEdit={() => {
          setModal(true);
          setTransaction(AccountsTransaction.Change);
        }}
      >
        {modal && (
          <AccountsForm
            transaction={transaction}
            onClose={() => {
              setModal(false);
            }}
          />
        )}
      </ActionsBlock>
    </div>
  );
};
