import { useState } from 'react';
import { Filters } from '../components/Filters/Filters';
import { Table } from '../components/Table/Table';
import type { Item } from '../components/Table/Table';
import type { Filter } from '../interfaces/Filter';
import { type Income, IncomeHeader } from '../interfaces/Income';
import { TransactionForm } from '../components/TransactionsForm/TransactionsForm';
import { ActionsBlock } from '../components/ActionBlock/ActionsBlock';
import { deleteIncome, incomes } from '../store/IncomesStore';
import type { Account } from '../interfaces/Account';
import { accounts } from '../store/store';

export const IncomesPage = (): JSX.Element => {
  const [tempIncomes, setTempIncomes] = useState(incomes);
  const [selected, setSelected] = useState<Item>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  const categories = Array.from(
    new Set(
      incomes.map((income) => {
        return income.category;
      })
    )
  );
  const subCategories = Array.from(
    new Set(
      incomes.map((income) => {
        return income.subcategory;
      })
    )
  );

  console.log(categories, subCategories);

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
    const filteredIncomes = incomes
      .filter((income) => {
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
    setTempIncomes(incomes);
  };
  return (
    <>
      <div className="table-container">
        <Table
          items={tempIncomes}
          fieldNames={IncomeHeader.fieldNames}
          fieldProperties={IncomeHeader.fieldProperties}
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
            requiredAccount.balance -= (selected as Income).amount;
            requiredAccount.income -= (selected as Income).amount;
          }
          deleteIncome(selected as Income);
          document.querySelectorAll('.checked').forEach((el) => {
            el.classList.remove('checked');
          });
          resetFilters();
          setSelected(undefined);
        }}
        onToggleEdit={() => {
          selected && setIsOpenForm(true);
        }}
      />
      <Filters
        accounts={Array.from(
          new Set(
            incomes.map((income) => {
              return income.account;
            })
          )
        )}
        categories={categories}
        subcategories={subCategories}
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
          isIncomeForm={true}
        />
      )}
    </>
  );
};
