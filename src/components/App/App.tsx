import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import NewExpense from '../../pages/Expenses/NewExpense';
import NewIncome from '../../pages/Incomes/NewIncome';
import '../../index.css';

export function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-expense" element={<NewExpense />} />
        <Route path="/new-income" element={<NewIncome />} />
      </Routes>
    </main>
  );
}
