export const getDate = (): string => {
  const data = new Date();
  const currentDate = data.toLocaleDateString();
  return currentDate;
};
