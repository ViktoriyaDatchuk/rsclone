import classNames from 'classnames';
import './Table.css';
import { useState } from 'react';
import type { Cost } from '../../interfaces/Cost';
import type { Account } from '../../interfaces/Account';
import type { Income } from '../../interfaces/Income';

type Item = Cost | Account | Income;

export function Table({
  items,
  fieldNames,
  fieldProperties,
}: {
  items: Item[];
  fieldNames: string[];
  fieldProperties: string[];
}): JSX.Element {
  const [sortingField, setSortingField] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const handleHeadClick = (event: React.MouseEvent<HTMLTableSectionElement, MouseEvent>): void => {
    const cell = event.target as HTMLTableCellElement;
    const field = cell.dataset.property as keyof Item;

    if (sortingField !== field) {
      setIsAscending(true);
      items.sort((a, b): number => {
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
      items.reverse();
    }
    setSortingField(String(field));
  };
  const checkRow = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>): void => {
    (event.currentTarget as HTMLTableRowElement).classList.add('checked');
  };

  const order = classNames({ desc: !isAscending });

  const fillFooter = (fieldProperty: string): string => {
    switch (fieldProperty) {
      case 'date': {
        return `Строк: ${items.length}`;
      }
      case 'id': {
        return `Строк: ${items.length}`;
      }
      case 'consumption': {
        return `${items.reduce((acc, item) => {
          return parseFloat((acc + (item as Account).consumption).toFixed(2));
        }, 0)} р`;
      }
      case 'income': {
        return `${items.reduce((acc, item) => {
          return parseFloat((acc + (item as Account).income).toFixed(2));
        }, 0)} р`;
      }
      case 'other': {
        return `${items.reduce((acc, item) => {
          return parseFloat((acc + (item as Account).other).toFixed(2));
        }, 0)} р`;
      }
      case 'balance': {
        return `${items.reduce((acc, item) => {
          return parseFloat((acc + (item as Account).balance).toFixed(2));
        }, 0)} р`;
      }
      case 'amount': {
        return `${items.reduce((acc, item) => {
          return parseFloat((acc + (item as Cost).amount).toFixed(2));
        }, 0)} р`;
      }
      default:
        return '';
    }
  };

  return (
    <>
      <table className="Table">
        <thead
          className="Table__head"
          onClick={(event) => {
            handleHeadClick(event);
          }}
        >
          <tr>
            {fieldNames.map((fieldName, index) => {
              return (
                <th
                  key={index}
                  className={classNames(order, 'Table__headCell', {
                    active: sortingField === fieldProperties[index],
                  })}
                  data-property={fieldProperties[index]}
                >
                  {fieldName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr
                key={index}
                onClick={(event) => {
                  checkRow(event);
                }}
              >
                {Object.values(item).map((value, index) => {
                  return (
                    <td className="Table__cell" key={index}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="totalRow">
            {fieldProperties.map((fieldProperty) => {
              return (
                <td className="Table__cell" key={fieldProperty}>
                  {fillFooter(fieldProperty)}
                </td>
              );
            })}
          </tr>
        </tfoot>
      </table>
    </>
  );
}
