import { useState } from 'react';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { CostHeader } from '../interfaces/Cost';
import { Costs } from '../stubs/Costs';

export const CostsPage = (): JSX.Element => {
  const [selected, setSelected] = useState<Item>();

  const updateSelected = (value: Item): void => {
    setSelected(value);
  };

  return (
    <div className="table-container">
      <Table
        items={Costs}
        fieldNames={CostHeader.fieldNames}
        fieldProperties={CostHeader.fieldProperties}
        setSelected={updateSelected}
      />
    </div>
  );
};
