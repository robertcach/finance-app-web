import useSWR from 'swr';
import { API_URL } from '../constants';
import { ExpenseResponse } from '../interfaces/api';

export function useExpenses() {
  const { data, error } = useSWR<ExpenseResponse>(`${API_URL}/expenses`);

  return { expenses: data, isLoading: !error && !data, isError: error };
}
