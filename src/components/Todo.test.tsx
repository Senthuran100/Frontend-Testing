import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {Todo} from './Todo';
const mockStore = configureStore([]);

test('renders learn react link', () => {
  const store = mockStore({
    todos:[
      {
        id: 1,
        title: "Todo 1",
        body:
          "Todo List 1",
      },
      {
        id: 2,
        title: "Todo 2",
        body:
          "Todo List 2",
      },
    ],
  });
  const obj = {
    id: 1,
    title: "Todo 1",
    body:
      "Todo List 1",
  }
  render(
    <Provider store={store}>
      <Todo removeTodo={()=>{}} todo={obj}/>
    </Provider>
  );

  const dataElement = screen.getByText('Delete Todo');
  expect(dataElement).toBeInTheDocument();
  
});
