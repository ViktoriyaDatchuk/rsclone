import { Table } from '../components/Table/Table';
import { IncomeHeader } from '../interfaces/Income';
import { Incomes } from '../stubs/Incomes';

export const IncomesPage = (): JSX.Element => {
  return (
    <div className="table-container">
      <Table
        items={Incomes}
        fieldNames={IncomeHeader.fieldNames}
        fieldProperties={IncomeHeader.fieldProperties}
      />
    </div>
  );
};
