import type { Account } from '../interfaces/Account';

export let accounts: Account[] = JSON.parse(localStorage.getItem('accounts')!) ?? [];

export const setAccounts = (value: Account[]): void => {
  accounts = value;
};

window.addEventListener('beforeunload', () => {
  localStorage.setItem('accounts', JSON.stringify(accounts));
});
