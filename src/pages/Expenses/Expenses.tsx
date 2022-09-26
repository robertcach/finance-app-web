import { useExpenses } from '../../hooks/useExpenses';
import { Expense } from '../../interfaces/expense';

const Expenses = () => {
  const { expenses } = useExpenses();

  return (
    <>
      <p>Expense's list:</p>
      {expenses
        ? expenses.map((expense: Expense) => (
            <>
              <p>{expense.title}</p>
            </>
          ))
        : 'Cargando'}
    </>
  );
};

export default Expenses;
