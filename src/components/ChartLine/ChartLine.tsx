import type { PropsChartLine } from '../../interfaces/propsTypes';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ReactElement } from 'react';
import { Line } from 'react-chartjs-2';
import './ChartLine.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ChartLine({ options, data }: PropsChartLine): ReactElement {
  return (
    <div className="chart-line">
      <Line options={options} data={data} />
    </div>
  );
}
