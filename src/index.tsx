import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { App } from "./views/app";

import { reducers } from "./shared/store/reducers";

const preloadedState = {
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
  avaibleOperations: [
    { id: 0, enable: false },
    { id: 1, enable: false },
    { id: 2, enable: false }
  ],
  clicks: 0
};

const store = createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// jsonplaceholder.typicode.com
