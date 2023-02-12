import { TableHeader } from './TableHeader';

export interface Account {
  id: number;
  account: string;
  consumption: number;
  income: number;
  other: number;
  balance: number;
  note: string;
}

export const AccountHeader: TableHeader = {
  fieldNames: ['N', 'Счет', 'Расход', 'Доход', 'Прочие операции', 'Остаток', 'Примечание'],
  fieldProperties: ['id', 'account', 'consumption', 'income', 'other', 'balance', 'note'],
};
