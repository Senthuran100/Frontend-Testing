import React from 'react';
import {  screen } from '@testing-library/react';
import {AddTodo} from './AddTodo';
import { renderWithProviders } from '../utils/test-utils';

test('renders learn react link', () => {
 
  renderWithProviders(<AddTodo saveTodo={()=>{}}/>)

  const dataElement = screen.getByText('Add Todo');
  expect(dataElement).toBeInTheDocument();
  
});
