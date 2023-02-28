import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import { type Cost, CostHeader } from '../interfaces/Cost';
import type { Filter } from '../interfaces/Filter';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { TransactionForm } from '../components/TransactionsForm/TransactionsForm';
import { costs, deleteCost } from '../store/CostsStore';
import type { Account } from '../interfaces/Account';
import { accounts } from '../store/AccountsStore';
import { statisticsExpenses } from '../store/StatisticsStore';
import MonthsList from '../options/MonthsList';

export const CostsPage = (): JSX.Element => {
  const [tempCosts, setTempCosts] = useState(costs);
  const [selected, setSelected] = useState<Item>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const categories = Array.from(
    new Set(
      costs.map((cost) => {
        return cost.category;
      })
    )
  );
  const subCategories = Array.from(
    new Set(
      costs.map((cost) => {
        return cost.subcategory;
      })
    )
  );

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
    const filteredCosts = costs
      .filter((cost) => {
        return filter.dateFrom !== ''
          ? new Date(cost.date.split('-').reverse().join('-')) >=
              new Date(filter.dateFrom.split('-').reverse().join('-'))
          : true;
      })
      .filter((cost) => {
        return filter.dateTo !== ''
          ? new Date(cost.date.split('-').reverse().join('-')) <=
              new Date(filter.dateTo.split('-').reverse().join('-'))
          : true;
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
          setSelected(undefined);
          setIsOpenForm(true);
        }}
        onToggleDel={() => {
          const requiredAccount = accounts.find((acc: Account) => {
            return acc.account === selected?.account;
          });
          if (requiredAccount !== undefined) {
            requiredAccount.balance += (selected as Cost).amount;
            requiredAccount.consumption -= (selected as Cost).amount;
          }
          statisticsExpenses[MonthsList[+(selected as Cost).date.slice(3, 5) - 1]][
            +(selected as Cost).date.slice(0, 2) - 1
          ] -= (selected as Cost).amount;
          deleteCost(selected as Cost);
          document.querySelectorAll('.checked').forEach((el) => {
            el.classList.remove('checked');
          });
          resetFilters();
          setSelected(undefined);
        }}
        onToggleEdit={() => {
          selected && setIsOpenForm(true);
          resetFilters();
        }}
      />
      <Filters
        categories={categories}
        subcategories={subCategories}
        accounts={Array.from(
          new Set(
            costs.map((cost) => {
              return cost.account;
            })
          )
        )}
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
