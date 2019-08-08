import { ActionTypes, Item, ItemsAction } from "../actions";

const INITIAL_STATE: Item[] = [
  { id: 0, amount: 0, show: true },
  { id: 1, amount: 0, show: true },
  { id: 2, amount: 0, show: true },
  { id: 3, amount: 0, show: true }
];

export const itemsReducer = (state = INITIAL_STATE, action: ItemsAction) => {
  switch (action.type) {
    case ActionTypes.incrementItem:
      const id = action.payload;
      return state.map(item => {
        if (id === item.id) {
          return { ...state[id], amount: state[id].amount + 1 };
        }
        return item;
      });

    default:
      return state;
  }
};
