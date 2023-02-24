import type { Account } from '../interfaces/Account';

export const maxNumber = (array: Account[]): number => {
  return Math.max.apply(
    null,
    array.map((item) => item.id)
  );
};
