import { Formik, Form, ErrorMessage, Field } from 'formik';
import {
  ExpenseValidation,
  expenseInitialValues,
} from '../../../../schemas/expenseValidation';

export const ExpenseForm = () => {
  const { expenseSchema } = ExpenseValidation();

  return (
    <Formik
      initialValues={expenseInitialValues}
      validationSchema={expenseSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" className="border border-stone-700" />
          <ErrorMessage name="title" />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
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
            type="text"
            className="border border-stone-700"
          />
          <ErrorMessage name="category" />
        </div>

        <button className="bg bg-black text-white p-2" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
