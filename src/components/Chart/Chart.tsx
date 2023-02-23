import { type ReactElement } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.css';
import type { PropsChart } from '../../interfaces/propsTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Chart({ options, data }: PropsChart): ReactElement {
  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
}
