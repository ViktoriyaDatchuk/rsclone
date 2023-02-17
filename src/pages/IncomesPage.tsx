import { useState } from 'react';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { IncomeHeader } from '../interfaces/Income';
import { Incomes } from '../stubs/Incomes';

export const IncomesPage = (): JSX.Element => {
  const [selected, setSelected] = useState<Item>();

  const updateSelected = (value: Item): void => {
    setSelected(value);
  };

  return (
    <div className="table-container">
      <Table
        items={Incomes}
        fieldNames={IncomeHeader.fieldNames}
        fieldProperties={IncomeHeader.fieldProperties}
        setSelected={updateSelected}
      />
    </div>
  );
};
