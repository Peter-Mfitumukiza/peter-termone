import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from './axios';
import App from './App';

jest.mock('./axios');

describe('App', () => {
  test('it calculates the result of the operation when the form is submitted', async () => {
    // Set up the response from the API
    axios.post.mockResolvedValue({
      data: { calcResponse: '5' },
    });

    // Render the component
    const { getByPlaceholderText, getByText } = render(<App />);

    // Enter the operand values and select an operation
    fireEvent.change(getByPlaceholderText('...'), { target: { value: '2' } });
    fireEvent.change(getByPlaceholderText('...'), { target: { value: '3' } });
    fireEvent.click(getByText('+'));

    // Submit the form
    fireEvent.submit(getByText('Operate'));

    // Check that the result of the operation is displayed on the page
    expect(getByText('2 + 3 = 5')).toBeInTheDocument();
  });
});
