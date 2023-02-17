import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { CostHeader } from '../interfaces/Cost';
import type { Filter } from '../interfaces/Filter';
import { Costs } from '../stubs/Costs';

export const CostsPage = (): JSX.Element => {
  const [tempCosts, setTempCosts] = useState(Costs);
  const [selected, setSelected] = useState<Item>();

  const accounts = Costs.map((cost) => {
    return cost.account;
  });
  const categories = Costs.map((cost) => {
    return cost.category;
  });
  const subCategories = Costs.map((cost) => {
    return cost.subcategory;
  });

  const [filter, setFilter] = useState({
    dateFrom: '',
    dateTo: '',
    account: '',
    category: '',
    subcategory: '',
  });
  
  const updateSelected = (value: Item): void => {
    setSelected(value);
  };

  const applyFilter = (property: keyof Filter, value: string): void => {
    filter[property] = value;
    setFilter(filter);
    const filteredCosts = Costs.filter((cost) => {
      return filter.dateFrom !== '' ? new Date(cost.date) >= new Date(filter.dateFrom) : true;
    })
      .filter((cost) => {
        return filter.dateTo !== '' ? new Date(cost.date) <= new Date(filter.dateTo) : true;
      })
      .filter((cost) => {
        return filter.account !== '' ? cost.account === filter.account : true;
      })
      .filter((cost) => {
        return filter.category !== '' ? cost.category === filter.category : true;
      })
      .filter((cost) => {
        return filter.subcategory !== '' ? cost.subcategory === filter.subcategory : true;
      });
    setTempCosts(filteredCosts);
  };

  const resetFilters = (): void => {
    setFilter({
      dateFrom: '',
      dateTo: '',
      account: '',
      category: '',
      subcategory: '',
    });
    setTempCosts(Costs);
  };

  return (
    <>
      <div className="table-container">
        <Table
          items={tempCosts}
          fieldNames={CostHeader.fieldNames}
          fieldProperties={CostHeader.fieldProperties}
          setSelected={updateSelected}
        />
      </div>
      <Filters
        categories={categories}
        subcategories={subCategories}
        accounts={accounts}
        applyFilter={applyFilter}
        resetCallBack={resetFilters}
      />
    </>
  );
};
