import { Table } from '../components/Table/Table';
import { CostHeader } from '../interfaces/Cost';
import { Costs } from '../stubs/Costs';

export const CostsPage = (): JSX.Element => {
  return (
    <div className="table-container">
      <Table
        items={Costs}
        fieldNames={CostHeader.fieldNames}
        fieldProperties={CostHeader.fieldProperties}
      />
    </div>
  );
};
