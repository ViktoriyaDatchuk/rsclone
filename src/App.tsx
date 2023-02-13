import type { ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { AccountsPage } from './pages/AccountsPage';
import { CostsPage } from './pages/CostsPage';
import { IncomesPage } from './pages/IncomesPage';
import { ActionsBlock } from './components/ActionBlock/ActionsBlock';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AccountsPage />} />
        <Route path="/costs" element={<CostsPage />} />
        <Route path="/incomes" element={<IncomesPage />} />
      </Routes>

      {/* <ActionsBlock /> */}
      <Footer />
    </div>
  );
}

export default App;
