import type { Account } from '../interfaces/Account';

export const accounts: Account[] = [
  {
    id: 1,
    account: 'main',
    consumption: 0,
    income: 1000,
    other: 0,
    balance: 1000,
    note: 'some',
  },
  {
    id: 2,
    account: 'second',
    consumption: 20,
    income: 500,
    other: 100.2,
    balance: 388.2,
    note: 'note',
  },
];
