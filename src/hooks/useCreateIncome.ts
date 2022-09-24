import { Income } from '../interfaces/income';
import { API_URL } from '../constants';

export function useCreateIncome() {
  const fetchIncome = async (income: Income) => {
    const response = await fetch(`${API_URL}/income/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(income),
    });

    if (response) {
      console.log('Income save in BBDD 💸');
    } else {
      console.log('You have failed this city 🏹');
    }

    return response;
  };

  return { fetchIncome };
}
