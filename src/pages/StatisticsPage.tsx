import type { ReactElement } from 'react';
import { useState } from 'react';
import { Chart } from '../components/Chart/Chart';
import { options } from '../components/Chart/ChartValue';
import MonthsList from '../options/MonthsList';
import { getMonth } from '../utils/todayMonth';
import { statisticsExpenses, statisticsIncomes } from '../store/StatisticsStore';
import './Pages.css';

export const StatisticsPage = (): ReactElement => {
  const [month, setMonth] = useState(MonthsList[getMonth()]);
  const data = {
    labels: statisticsIncomes[month].map((item, index) => index + 1),
    datasets: [
      {
        label: 'Расход',
        data: statisticsExpenses[month],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Доход',
        data: statisticsIncomes[month],
        backgroundColor: 'rgba(24,204,19, 0.5)',
      },
    ],
  };
  return (
    <main className="main__container statistics__padding">
      <Chart options={options} data={data} />
      <div className="months__container">
        <label className="statistics__label" htmlFor="months">
          Период:
        </label>
        <select
          name="months"
          defaultValue={MonthsList[getMonth()]}
          onChange={(event) => {
            setMonth(event.target.value);
          }}
          className="statistics__month"
        >
          {MonthsList.map((month, index) => {
            return (
              <option key={index} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
    </main>
  );
};
