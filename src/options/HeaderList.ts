import type { HeaderListType } from '../interfaces/interfaces';
import Accounts from '../assets/img/accounts.png';
import Contributions from '../assets/img/contributions.png';
import Expenses from '../assets/img/expenses.png';
import Income from '../assets/img/income.png';
import Statistics from '../assets/img/planning.png';

export const HeaderList: HeaderListType = {
  Счета: [Accounts, '/'],
  Расходы: [Expenses, '/costs'],
  Доходы: [Income, '/incomes'],
  Статистика: [Statistics, '/statistics'],
  'Банковские вклады': [Contributions, '/deposit'],
};
