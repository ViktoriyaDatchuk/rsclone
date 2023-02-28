import type { Income } from '../interfaces/Income';

export const incomes: Income[] = JSON.parse(localStorage.getItem('incomes')!) ?? [];

export const deleteIncome = (selected: Income): void => {
  incomes.forEach((cost, index) => {
    if (JSON.stringify(cost) === JSON.stringify(selected)) {
      incomes.splice(index, 1);
    }
  });
};

export const updateSelectedIncome = (selected: Income, updated: Income): void => {
  incomes.forEach((income, index) => {
    if (JSON.stringify(income) === JSON.stringify(selected)) {
      incomes[index] = updated;
    }
  });
};

window.addEventListener('beforeunload', () => {
  localStorage.setItem(
    'incomes',
    JSON.stringify(
      incomes.sort((a: Income, b: Income) => {
        const aDate = new Date(a.date.split('-').reverse().join('-'));
        const bDate = new Date(b.date.split('-').reverse().join('-'));
        if (aDate < bDate) {
          return -1;
        }
        if (aDate > bDate) {
          return 1;
        }
        return 0;
      })
    )
  );
});
