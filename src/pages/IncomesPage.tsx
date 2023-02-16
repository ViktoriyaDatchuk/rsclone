import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import type { Filter } from '../interfaces/Filter';
import { IncomeHeader } from '../interfaces/Income';
import { Incomes } from '../stubs/Incomes';

export const IncomesPage = (): JSX.Element => {
  const [tempIncomes, setTempIncomes] = useState(Incomes);

  const accounts = Incomes.map((income) => {
    return income.account;
  });
  const categories = Incomes.map((income) => {
    return income.category;
  });
  const subCategories = Incomes.map((income) => {
    return income.subcategory;
  });

  const [filter, setFilter] = useState({
    dateFrom: '',
    dateTo: '',
    account: '',
    category: '',
    subcategory: '',
  });

  const applyFilter = (property: keyof Filter, value: string): void => {
    filter[property] = value;
    setFilter(filter);
    const filteredIncomes = Incomes.filter((income) => {
      return filter.dateFrom !== '' ? new Date(income.date) >= new Date(filter.dateFrom) : true;
    })
      .filter((income) => {
        return filter.dateTo !== '' ? new Date(income.date) <= new Date(filter.dateTo) : true;
      })
      .filter((income) => {
        return filter.account !== '' ? income.account === filter.account : true;
      })
      .filter((income) => {
        return filter.category !== '' ? income.category === filter.category : true;
      })
      .filter((income) => {
        return filter.subcategory !== '' ? income.subcategory === filter.subcategory : true;
      });
    setTempIncomes(filteredIncomes);
  };

  const resetFilters = (): void => {
    setFilter({
      dateFrom: '',
      dateTo: '',
      account: '',
      category: '',
      subcategory: '',
    });
    setTempIncomes(Incomes);
  };
  return (
    <>
      <div className="table-container">
        <Table
          items={tempIncomes}
          fieldNames={IncomeHeader.fieldNames}
          fieldProperties={IncomeHeader.fieldProperties}
        />
      </div>
      <Filters
        accounts={accounts}
        categories={categories}
        subcategories={subCategories}
        applyFilter={applyFilter}
        resetCallBack={resetFilters}
      />
    </>
  );
};
