import type { TableHeader } from './TableHeader';

export interface Income {
  date: string;
  account: string;
  category: string;
  subcategory: string;
  quantity: number;
  unit: string;
  amount: number;
  note: string;
}

export const IncomeHeader: TableHeader = {
  fieldNames: [
    'Дата',
    'Счет',
    'Категория дохода',
    'Подкатегория дохода',
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
