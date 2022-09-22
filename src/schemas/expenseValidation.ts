import { Expense } from '../interfaces/expense';
import * as yup from 'yup';

export function ExpenseValidation() {
  const expenseSchema = () => {
    return yup.object().shape({
      title: yup.string().required('Required field'),
      amount: yup.number().min(0, 'Min value 0.').required('Required field'),
      category: yup.string().required('Required field'),
    });
  };

  return { expenseSchema };
}

export const expenseInitialValues: Expense = {
  title: '',
  amount: '',
  category: '',
};
