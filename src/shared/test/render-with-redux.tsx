import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { reducers, StoreState } from "../store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const preloadedState = {
  stats: {
    healthPoints: 100,
    foodPoints: 100
  },
  itemsToShow: [
    { id: 0, amount: 0, show: true },
    { id: 1, amount: 0, show: true },
    { id: 2, amount: 0, show: true },
    { id: 3, amount: 0, show: true }
  ],
  itemsClickable: [0, 1, 2, 3],
  avaibleOperations: [{ id: 0, enable: false }, { id: 1, enable: false }, { id: 2, enable: false }],
  clicks: 0
};

export function renderWithRedux(initialState: StoreState, ui: JSX.Element) {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

  return {
    ...render(<Provider store={store}>{ui}</Provider>)
  };
}
