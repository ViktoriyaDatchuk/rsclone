import type { Filter } from '../../interfaces/Filter';
import { BlockButtonElement } from '../ActionBlock/BlockButton/BlockButtonElement';
import './Filters.css';

export const Filters = ({
  accounts,
  categories,
  subcategories,
  minDate,
  maxDate,
  filterChange,
}: {
  accounts: string[];
  categories: string[];
  subcategories: string[];
  minDate: string;
  maxDate: string;
  filterChange: (property: keyof Filter, value: string) => void;
}): JSX.Element => {
  return (
    <div className="filters">
      <label htmlFor="date-from">C даты:</label>
      <input
        type="date"
        name="date-from"
        min={minDate}
        max={maxDate}
        onChange={(event) => {
          const target = event.target;
          // console.log(target.value);
          filterChange('dateFrom', target.value);
          // filter.dateFrom = target.value;
        }}
      />
      <label htmlFor="date-to">По дату:</label>
      <input type="date" name="date-to" min={minDate} max={maxDate} />
      <label htmlFor="accounts">Счет:</label>
      <select name="accounts" id="accounts">
        <option value="">Все счета</option>
        {accounts.map((account, index) => {
          return (
            <option key={index} value={account}>
              {account}
            </option>
          );
        })}
      </select>
      <label htmlFor="categories">Категория:</label>
      <select
        name="categories"
        id="categories"
        onChange={(event) => {
          console.log(event.target.value);
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
      <label htmlFor="subcategories">Подкатегория:</label>
      <select name="subcategories" id="subcategories">
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
          console.log('Сбросить');
        }}
      />
    </div>
  );
};
