import { useRef } from 'react';
import type { Filter } from '../../interfaces/Filter';
import { BlockButtonElement } from '../ActionBlock/BlockButton/BlockButtonElement';
import './Filters.css';

export const Filters = ({
  accounts,
  categories,
  subcategories,
  applyFilter,
  resetCallBack,
}: {
  accounts: string[];
  categories: string[];
  subcategories: string[];
  applyFilter: (property: keyof Filter, value: string) => void;
  resetCallBack: () => void;
}): JSX.Element => {
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);
  const accountRef = useRef(null);
  const categoryRef = useRef(null);
  const subcategoryRef = useRef(null);

  return (
    <div className="filters">
      <label className="filters__label" htmlFor="date-from">
        C даты:
      </label>
      <input
        className="filters__date"
        ref={dateFromRef}
        type="date"
        name="date-from"
        onChange={(event) => {
          const target = event.target;
          applyFilter('dateFrom', target.value.split('-').reverse().join('-'));
        }}
      />
      <label className="filters__label" htmlFor="date-to">
        По дату:
      </label>
      <input
        className="filters__date"
        ref={dateToRef}
        type="date"
        name="date-to"
        onChange={(event) => {
          const target = event.target;
          applyFilter('dateTo', target.value.split('-').reverse().join('-'));
        }}
      />
      <label className="filters__label" htmlFor="accounts">
        Счет:
      </label>
      <select
        className="filters__select"
        ref={accountRef}
        name="accounts"
        id="accounts"
        onChange={(event) => {
          applyFilter('account', (event.target as HTMLSelectElement).value);
        }}
      >
        <option value="">Все счета</option>
        {accounts.map((account, index) => {
          return (
            <option key={index} value={account}>
              {account}
            </option>
          );
        })}
      </select>
      <label className="filters__label" htmlFor="categories">
        Категория:
      </label>
      <select
        className="filters__select"
        ref={categoryRef}
        name="categories"
        id="categories"
        onChange={(event) => {
          applyFilter('category', (event.target as HTMLSelectElement).value);
        }}
      >
        <option value="">Все категории</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <label className="filters__label" htmlFor="subcategories">
        Подкатегория:
      </label>
      <select
        className="filters__select"
        ref={subcategoryRef}
        name="subcategories"
        id="subcategories"
        onChange={(event) => {
          applyFilter('subcategory', (event.target as HTMLSelectElement).value);
        }}
      >
        <option value="">Все подкатегории</option>
        {subcategories.map((subcategory, index) => {
          return (
            <option key={index} value={subcategory}>
              {subcategory}
            </option>
          );
        })}
      </select>
      <BlockButtonElement
        name="Сбросить"
        func={() => {
          (dateFromRef.current as unknown as HTMLInputElement).value = '';
          (dateToRef.current as unknown as HTMLInputElement).value = '';
          (accountRef.current as unknown as HTMLSelectElement).value = '';
          (categoryRef.current as unknown as HTMLSelectElement).value = '';
          (subcategoryRef.current as unknown as HTMLSelectElement).value = '';
          resetCallBack();
        }}
      />
    </div>
  );
};
