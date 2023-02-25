import type { Cost } from '../interfaces/Cost';

export const costs: Cost[] = JSON.parse(localStorage.getItem('costs')!) ?? [];

export const deleteCost = (selected: Cost): void => {
  costs.forEach((cost, index) => {
    if (JSON.stringify(cost) === JSON.stringify(selected)) {
      costs.splice(index, 1);
    }
  });
};

export const updateSelectedCost = (selected: Cost, updated: Cost): void => {
  costs.forEach((cost, index) => {
    if (JSON.stringify(cost) === JSON.stringify(selected)) {
      costs[index] = updated;
    }
  });
};

window.addEventListener('beforeunload', () => {
  localStorage.setItem(
    'costs',
    JSON.stringify(
      costs.sort((a: Cost, b: Cost) => {
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
