import { Expense } from '../interfaces/expense';
import { API_URL } from '../constants';

export function useCreateExpense() {
  const fetchExpense = async (expense: Expense) => {
    const response = await fetch(`${API_URL}/expense/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });

    if (response) {
      console.log('Save in BBDD 💸');
    } else {
      console.log('You have failed this city 🏹');
    }

    return response;
  };

  return { fetchExpense };
}
