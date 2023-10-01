import React from 'react';
import {  screen } from '@testing-library/react';
import {Todo} from './Todo';
import { renderWithProviders } from '../utils/test-utils';

test('renders learn react link', () => {

  const obj = {
    id: 1,
    title: "Todo 1",
    body:
      "Todo List 1",
  }

  renderWithProviders( <Todo removeTodo={()=>{}} todo={obj}/>)
  const dataElement = screen.getByText('Delete Todo');
  expect(dataElement).toBeInTheDocument();
  
});
