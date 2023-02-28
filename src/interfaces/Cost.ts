import type { TableHeader } from './TableHeader';

export interface Cost {
  date: string;
  account: string;
  category: string;
  subcategory: string;
  quantity: number;
  unit: string;
  amount: number;
  note: string;
}

export const CostHeader: TableHeader = {
  fieldNames: [
    'Дата',
    'Счет',
    'Категория расхода',
    'Подкатегория расхода',
    'Количество',
    'Единица измерения',
    'Сумма',
    'Примечание',
  ],
  fieldProperties: [
    'date',
    'account',
    'category',
    'subcategory',
    'quantity',
    'unit',
    'amount',
    'note',
  ],
};
