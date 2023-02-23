import { type ReactElement, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { AccountsPage } from './pages/AccountsPage';
import { CostsPage } from './pages/CostsPage';
import { IncomesPage } from './pages/IncomesPage';
import { DepositPage } from './pages/DepositPage';
// import { Chart } from './components/Chart/Chart';
// import { options, data } from './components/Chart/ChartValue';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AccountsPage />} />
        <Route path="/costs" element={<CostsPage />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="/deposit" element={<DepositPage />} />
      </Routes>
      {/* <Chart options={options} data={data} /> */}
      <Footer />
    </div>
  );
}

export default App;
