import { Income } from '../interfaces/income';
import * as yup from 'yup';

export function IncomeValidation() {
  const incomeSchema = () => {
    return yup.object().shape({
      title: yup.string().required('Required field'),
      amount: yup.number().min(0, 'Min value 0').required('Required field'),
      category: yup.string().required('Required field'),
    });
  };

  return { incomeSchema };
}

export const incomeInitialValues: Income = {
  title: '',
  amount: '',
  category: '',
};
