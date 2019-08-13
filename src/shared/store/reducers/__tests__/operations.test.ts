import { operationsReducer } from "../operations";
import { ActionTypes } from "../../actions";

const data = [
  {
    id: 0,
    name: 'Eat Blueberries',
    requiredItems: [{id: 3, amount: 10}],
    onProcess: {increaseFoodPoints: 5}
  },
  {
    id: 1,
    name: 'Craft Stone Axe',
    requiredItems: [{id: 0, amount: 20}, {id: 1, amount: 10}],
    onProcess: {}
  },
  {
    id: 2,
    name: 'Craft Stone Pickaxe',
    requiredItems: [{id: 0, amount: 20}, {id: 1, amount: 10}],
    onProcess: {}
  },
];

describe('operations reducer', () => {

  test("should not change state", () => {
    const state = [{ id: 0, enable: true }, { id: 1, enable: false }, { id: 2, enable: false }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 0, show: true },
          { id: 1, amount: 0, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 11, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: true }, { id: 1, enable: false }, { id: 2, enable: false }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });

  test("should enable one operation", () => {
    const state = [{ id: 0, enable: false }, { id: 1, enable: false }, { id: 2, enable: false }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 0, show: true },
          { id: 1, amount: 0, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 11, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: true }, { id: 1, enable: false }, { id: 2, enable: false }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });

  test("should enable two operations", () => {
    const state = [{ id: 0, enable: false }, { id: 1, enable: false }, { id: 2, enable: false }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 20, show: true },
          { id: 1, amount: 10, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 5, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: false }, { id: 1, enable: true }, { id: 2, enable: true }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });

  test("should disable all operations", () => {
    const state = [{ id: 0, enable: true }, { id: 1, enable: true }, { id: 2, enable: true }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 0, show: true },
          { id: 1, amount: 0, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 5, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: false }, { id: 1, enable: false }, { id: 2, enable: false }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });

  test("should disable two operations", () => {
    const state = [{ id: 0, enable: true }, { id: 1, enable: true }, { id: 2, enable: true }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 0, show: true },
          { id: 1, amount: 0, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 15, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: true }, { id: 1, enable: false }, { id: 2, enable: false }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });

  test("should disable one operation", () => {
    const state = [{ id: 0, enable: true }, { id: 1, enable: true }, { id: 2, enable: true }];
    const action = {
      type: Number(ActionTypes.updateAvaibleOperations),
      payload: {
        itemsAvaible: [
          { id: 0, amount: 20, show: true },
          { id: 1, amount: 20, show: true },
          { id: 2, amount: 0, show: true },
          { id: 3, amount: 4, show: true }
        ],
        operationsData: data
      }
    };
    const expected = [{ id: 0, enable: false }, { id: 1, enable: true }, { id: 2, enable: true }];

    expect(operationsReducer(state, action)).toEqual(expected);
  });
});


