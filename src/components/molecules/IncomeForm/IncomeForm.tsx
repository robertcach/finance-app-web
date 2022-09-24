import { Formik, Form, ErrorMessage, Field } from 'formik';
import {
  incomeInitialValues,
  IncomeValidation,
} from '../../../schemas/incomeValidation';
import { Income } from '../../../interfaces/income';
import { useCreateIncome } from '../../../hooks/useCreateIncome';

export const IncomeForm = () => {
  const { incomeSchema } = IncomeValidation();
  const { fetchIncome } = useCreateIncome();

  return (
    <Formik
      initialValues={incomeInitialValues}
      validationSchema={incomeSchema}
      onSubmit={(values: Income) => {
        if (values) {
          const income: Income = {
            title: values.title,
            amount: values.amount,
            category: values.category,
          };

          fetchIncome(income);
        }
      }}
    >
      <Form>
        <div>
          <label htmlFor="title">Title:</label>
          <Field name="title" type="text" className="border border-stone-700" />
          <ErrorMessage name="title" />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <Field
            name="amount"
            type="number"
            className="border border-stone-700"
          />
          <ErrorMessage name="amount" />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <Field
            name="category"
            as="select"
            className="border border-stone-700"
          >
            <option disabled value="">
              Select
            </option>
            <option value="sport">Sport</option>
            <option value="books">Books</option>
          </Field>
          <ErrorMessage name="category" />
        </div>

        <button className="bg bg-black text-white p-2" type="submit">
          Create Income
        </button>
      </Form>
    </Formik>
  );
};
