import { useEffect, useState } from 'react';
import styles from './CostsTable.module.css';

export const CostsTable = (): JSX.Element => {
  const [sortingField, setSortingField] = useState('date');

  useEffect(() => {
    console.log('update');
  }, [sortingField]);

  const handleHeadClick = (event: React.MouseEvent<HTMLTableSectionElement, MouseEvent>): void => {
    const cell = event.target as HTMLTableCellElement;

    const field = cell.dataset.property as keyof Cost;
    Costs.sort((a, b): number => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });
    setSortingField(field);
  };

  return (
    <table className={styles.CostsTable}>
      <thead
        onClick={(event) => {
          handleHeadClick(event);
        }}
      >
        <tr>
          <th data-property="date">Дата</th>
          <th data-property="account">Счет</th>
          <th data-property="category">Категория расхода</th>
          <th data-property="subcategory">Подкатегория расхода</th>
          <th data-property="quantity">Количество</th>
          <th data-property="unit">Единица измерения</th>
          <th data-property="amount">Сумма</th>
          <th data-property="note">Примечания</th>
        </tr>
      </thead>
      <tbody>{mapCosts(Costs)}</tbody>
    </table>
  );
};

interface Cost {
  date: string;
  account: string;
  category: string;
  subcategory: string;
  quantity: number;
  unit: string;
  amount: number;
  note: string;
}

const Costs = [
  {
    date: '01-01-2023',
    account: 'account-1',
    category: 'home',
    subcategory: 'cleaning',
    quantity: 2,
    unit: 'pcs',
    amount: 40,
    note: '',
  },
  {
    date: '02-01-2023',
    account: 'account-2',
    category: 'garage',
    subcategory: 'tires',
    quantity: 1,
    unit: 'pcs',
    amount: 60,
    note: 'some note',
  },
  {
    date: '03-01-2023',
    account: 'account-3',
    category: 'kitchen',
    subcategory: 'meat',
    quantity: 2,
    unit: 'kg',
    amount: 10,
    note: 'note',
  },
];

const mapCosts = (costs: Cost[]): JSX.Element[] => {
  return costs.map((cost, i) => {
    return (
      <tr key={i}>
        <td>{cost.date}</td>
        <td>{cost.account}</td>
        <td>{cost.category}</td>
        <td>{cost.subcategory}</td>
        <td>{cost.quantity}</td>
        <td>{cost.unit}</td>
        <td>{cost.amount}</td>
        <td>{cost.note}</td>
      </tr>
    );
  });
};
