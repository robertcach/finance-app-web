import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import NewExpense from '../../pages/Expenses/NewExpense';
import NewIncome from '../../pages/Incomes/NewIncome';
import '../../index.css';
import Expenses from '../../pages/Expenses/Expenses';

export function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-expense" element={<NewExpense />} />
        <Route path="/new-income" element={<NewIncome />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </main>
  );
}
