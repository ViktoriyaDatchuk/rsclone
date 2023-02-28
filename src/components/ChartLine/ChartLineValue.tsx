const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const expense = [10, 20, 12, 10, 15, 3, 13];
const income = [15, 25, 10, 15, 10, 13, 10];

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.4,
    },
  },
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
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Доход',
      data: income,
      borderColor: 'rgba(24,204,19)',
      backgroundColor: 'rgba(24,204,19, 0.5)',
    },
  ],
};
