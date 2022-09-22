import { useState } from 'react';
import { API_URL } from '../constants';
import { Expense } from '../interfaces/expense';

export function useCreateExpense() {
  const [loading, setLoading] = useState(false);

  const fetchExpense = async (expense: Expense) => {
    const res = await fetch(`${API_URL}/expense/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });

    if (res) {
      console.log('Se creo correctamente');
    } else {
      console.log('Fallo');
    }

    return;
  };

  return { fetchExpense, loading };
}
