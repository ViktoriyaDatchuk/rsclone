import { useState } from 'react';
import './CostsTable.css';
import classNames from 'classnames';

export const CostsTable = (): JSX.Element => {
  const [sortingField, setSortingField] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const handleHeadClick = (event: React.MouseEvent<HTMLTableSectionElement, MouseEvent>): void => {
    const cell = event.target as HTMLTableCellElement;
    const field = cell.dataset.property as keyof Cost;

    if (sortingField !== field) {
      setIsAscending(true);
      Costs.sort((a, b): number => {
        if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] > b[field]) {
          return 1;
        }
        return 0;
      });
    }
    if (sortingField === field) {
      setIsAscending(!isAscending);
      Costs.reverse();
    }
    setSortingField(field);
  };

  const order = classNames({ desc: !isAscending });

  return (
    <>
      <table className="CostsTable">
        <thead
          onClick={(event) => {
            handleHeadClick(event);
          }}
        >
          <tr>
            <th
              className={classNames(order, { active: sortingField === 'date' })}
              data-property="date"
            >
              Дата
            </th>
            <th
              className={classNames(order, { active: sortingField === 'account' })}
              data-property="account"
            >
              Счет
            </th>
            <th
              className={classNames(order, { active: sortingField === 'category' })}
              data-property="category"
            >
              Категория расхода
            </th>
            <th
              className={classNames(order, { active: sortingField === 'subcategory' })}
              data-property="subcategory"
            >
              Подкатегория расхода
            </th>
            <th
              className={classNames(order, { active: sortingField === 'quantity' })}
              data-property="quantity"
            >
              Количество
            </th>
            <th
              className={classNames(order, { active: sortingField === 'unit' })}
              data-property="unit"
            >
              Единица измерения
            </th>
            <th
              className={classNames(order, { active: sortingField === 'amount' })}
              data-property="amount"
            >
              Сумма
            </th>
            <th
              className={classNames(order, { active: sortingField === 'note' })}
              data-property="note"
            >
              Примечания
            </th>
          </tr>
        </thead>
        <tbody>{mapCosts(Costs)}</tbody>
      </table>
      <div className="totalRow"></div>
    </>
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
