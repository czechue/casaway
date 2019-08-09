import { operationsReducer } from "./operations";
import { ActionTypes } from "../actions";

test("reducer returns correct object", () => {
  const state = [
    { id: 0, enable: false },
    { id: 1, enable: false },
    { id: 2, enable: false }
    ];
  const action = {
    type: Number(ActionTypes.updateAvaibleOperations),
    payload: [
      { id: 0, amount: 0, show: true },
      { id: 1, amount: 0, show: true },
      { id: 2, amount: 0, show: true },
      { id: 3, amount: 11, show: true }
    ]
  };
  const expected = [
    { id: 0, enable: true },
    { id: 1, enable: false },
    { id: 2, enable: false }
    ];

  expect(operationsReducer(state, action)).toEqual(expected)
});


test("reducer returns correct object", () => {
  const state = [
    { id: 0, enable: false },
    { id: 1, enable: false },
    { id: 2, enable: false }
  ];
  const action = {
    type: Number(ActionTypes.updateAvaibleOperations),
    payload: [
      { id: 0, amount: 20, show: true },
      { id: 1, amount: 10, show: true },
      { id: 2, amount: 0, show: true },
      { id: 3, amount: 5, show: true }
    ]
  };
  const expected = [
    { id: 0, enable: false },
    { id: 1, enable: true },
    { id: 2, enable: true }
  ];

  expect(operationsReducer(state, action)).toEqual(expected)
});
