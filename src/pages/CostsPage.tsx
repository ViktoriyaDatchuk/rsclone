import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { type Cost, CostHeader } from '../interfaces/Cost';
import type { Filter } from '../interfaces/Filter';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { TransactionForm } from '../components/TransactionsForm/TransactionsForm';
import { costs, saveCosts } from '../store/CostsStore';

export const CostsPage = (): JSX.Element => {
  const [tempCosts, setTempCosts] = useState(costs);
  const [selected, setSelected] = useState<Item>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const accounts = JSON.parse(localStorage.getItem('accounts')!) ?? [];

  const categories = costs.map((cost) => {
    return cost.category;
  });
  const subCategories = costs.map((cost) => {
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

  const deleteCost = (selected: Cost): void => {
    costs.forEach((cost, index) => {
      if (JSON.stringify(cost) === JSON.stringify(selected)) {
        costs.splice(index, 1);
      }
    });
    saveCosts();
    setTempCosts(
      costs.filter((cost) => {
        return JSON.stringify(cost) !== JSON.stringify(selected);
      })
    );
  };

  const applyFilter = (property: keyof Filter, value: string): void => {
    filter[property] = value;
    setFilter(filter);
    const filteredCosts = costs
      .filter((cost) => {
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
    setTempCosts(costs);
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
      <ActionsBlock
        onToggleAdd={() => {
          setIsOpenForm(true);
        }}
        onToggleDel={() => {
          deleteCost(selected as Cost);
        }}
        onToggleEdit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Filters
        categories={categories}
        subcategories={subCategories}
        accounts={costs.map((cost) => {
          return cost.account;
        })}
        applyFilter={applyFilter}
        resetCallBack={resetFilters}
      />
      {isOpenForm && (
        <TransactionForm
          selected={selected}
          availableAccounts={accounts}
          closeForm={() => {
            setIsOpenForm(false);
          }}
        />
      )}
    </>
  );
};
