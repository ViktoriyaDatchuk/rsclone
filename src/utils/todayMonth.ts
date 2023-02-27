export const getMonth = (): number => {
  const data = new Date();
  const currentMonth = data.getMonth();
  return currentMonth;
};
