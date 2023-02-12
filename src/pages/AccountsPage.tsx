import { Table } from '../components/Table/Table';
import { AccountHeader } from '../interfaces/Account';
import { accounts } from '../stubs/Accounts';

export const AccountsPage = (): JSX.Element => {
  return (
    <div className="table-container">
      <Table
        items={accounts}
        fieldNames={AccountHeader.fieldNames}
        fieldProperties={AccountHeader.fieldProperties}
      />
    </div>
  );
};
