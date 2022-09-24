import { render, screen, fireEvent } from '@testing-library/react';
import { ExpenseForm } from '../ExpenseForm';

describe('Type inputs', () => {
  test('should be able to type into Title input', () => {
    render(<ExpenseForm />);

    const nameLabel = screen.getByLabelText(/title/i);
    fireEvent.change(nameLabel, { target: { value: 'Comprar comida' } });

    expect(nameLabel.value).toBe('Comprar comida');
  });

  test('should be able to type in Amount input', () => {
    render(<ExpenseForm />);

    const amountInput = screen.getByLabelText(/amount/i);
    fireEvent.change(amountInput, { target: { value: 5 } });

    expect(amountInput.value).toBe('5');
  });

  test('Should be able to type in Category input', () => {
    render(<ExpenseForm />);

    const categoryInput = screen.getByLabelText(/category/i);
    fireEvent.change(categoryInput, { target: { value: 'red' } });

    expect(categoryInput.value).toBe('red');
  });

  test('Show input error message', async () => {
    render(<ExpenseForm />);

    const nameLabel = screen.getByLabelText(/title/i);
    fireEvent.change(nameLabel, { target: { value: '' } });

    const amountInput = screen.getByLabelText(/amount/i);
    fireEvent.change(amountInput, { target: { value: 5 } });

    const categoryInput = screen.getByLabelText(/category/i);
    fireEvent.change(categoryInput, { target: { value: 'red' } });

    const button = screen.getByRole('button', { type: 'submit' });
    fireEvent.click(button);

    const errorMessage = await screen.findByText(/Required field/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
