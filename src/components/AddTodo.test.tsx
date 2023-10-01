import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AddTodo} from './AddTodo';
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
  render(
    <Provider store={store}>
      <AddTodo saveTodo={()=>{}}/>
    </Provider>
  );

  const dataElement = screen.getByText('Add Todo');
  expect(dataElement).toBeInTheDocument();
  
});
