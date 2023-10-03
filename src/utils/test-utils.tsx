import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'


const mockStore = configureStore([]);
const mockStoreValues = mockStore({
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

export function renderWithProviders(
  ui: React.ReactElement
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={mockStoreValues}>{children}</Provider>
  }

  return { ...render(ui, { wrapper: Wrapper }) }
}