import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import { CostHeader } from '../interfaces/Cost';
import type { Filter } from '../interfaces/Filter';
import { Costs } from '../stubs/Costs';

export const CostsPage = (): JSX.Element => {
  const [tempCosts, setTempCosts] = useState(Costs);
  const accounts = Costs.map((cost) => {
    return cost.account;
  });
  const categories = Costs.map((cost) => {
    return cost.category;
  });
  const subCategories = tempCosts.map((cost) => {
    return cost.subcategory;
  });
  const minDate = Costs[0].date.split('-').reverse().join('-');
  const maxDate = Costs[Costs.length - 1].date.split('-').reverse().join('-');
  const filter = {
    dateFrom: '',
    dateTo: '',
    account: '',
    category: '',
    subcategory: '',
  };

  const changeFilterProperties = (property: keyof Filter, value: string): void => {
    filter[property] = value;
    console.log(filter);
  };

  const filterCosts = (parameter: string, value: string): void => {
    switch (parameter) {
      case 'date-from': {
        if (value !== '') {
          setTempCosts(
            Costs.filter((item) => {
              return item.date >= value;
            })
          );
        }
        break;
      }
      case 'category': {
        setTempCosts(
          Costs.filter((item) => {
            return item.category === value;
          })
        );
        console.log('here', tempCosts);
        break;
      }
    }
  };

  return (
    <>
      <div className="table-container">
        <Table
          items={tempCosts}
          fieldNames={CostHeader.fieldNames}
          fieldProperties={CostHeader.fieldProperties}
        />
      </div>
      <Filters
        categories={categories}
        subcategories={subCategories}
        accounts={accounts}
        minDate={minDate}
        maxDate={maxDate}
        filterChange={changeFilterProperties}
      />
    </>
  );
};
