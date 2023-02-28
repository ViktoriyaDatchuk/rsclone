const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const expense = [10, 20, 12, 10, 15, 3, 13];
const income = [15, 25, 10, 15, 10, 13, 10];

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'График движения средств',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Расход',
      data: expense,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Доход',
      data: income,
      backgroundColor: 'rgba(24,204,19, 0.5)',
    },
  ],
};
