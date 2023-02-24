import type { ReactElement } from 'react';
import { Chart } from '../components/Chart/Chart';
import { options, data } from '../components/Chart/ChartValue';
import './Pages.css';

export const StatisticsPage = (): ReactElement => {
  return (
    <main className="statistics__container">
      <Chart options={options} data={data} />
    </main>
  );
};
