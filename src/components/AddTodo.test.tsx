import React from 'react';
import {  screen, waitFor } from '@testing-library/react';
import {AddTodo} from './AddTodo';
import { renderWithProviders } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';

test('renders Add Todo component and do unit testing', async () => {
 
  renderWithProviders(<AddTodo saveTodo={()=>{}}/>)

  const dataElement = screen.getByText('Add Todo');
  expect(dataElement).toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText("Title"), "Title")
  userEvent.type(screen.getByPlaceholderText("Description"), "Description")
  await waitFor(() => {
    expect(screen.getByPlaceholderText("Title")).toHaveValue("Title");
    expect(screen.getByPlaceholderText("Description")).toHaveValue("Description");
 });
});
