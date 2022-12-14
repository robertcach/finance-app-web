import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useCreateExpense } from '../../../hooks/useCreateExpense';
import { Expense } from '../../../interfaces/expense';
import {
  ExpenseValidation,
  expenseInitialValues,
} from '../../../schemas/expenseValidation';

export const ExpenseForm = () => {
  const { expenseSchema } = ExpenseValidation();
  const { fetchExpense } = useCreateExpense();

  const handleSubmit = (values: Expense) => {
    if (values) {
      const expense: Expense = {
        title: values.title,
        amount: values.amount,
        category: values.category,
      };

      fetchExpense(expense);
    }
  };

  return (
    <Formik
      initialValues={expenseInitialValues}
      validationSchema={expenseSchema}
      onSubmit={(values: Expense) => handleSubmit(values)}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            type="text"
            className="border border-stone-700"
            aria-label="title"
          />
          <ErrorMessage name="title" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <Field
            name="amount"
            type="number"
            className="border border-stone-700"
            aria-label="amount"
          />
          <ErrorMessage name="amount" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <Field
            name="category"
            as="select"
            className="border border-stone-700"
            aria-label="category"
          >
            <option disabled value="">
              Select
            </option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="category" />
        </div>
        <button className="bg bg-black text-white p-2" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
