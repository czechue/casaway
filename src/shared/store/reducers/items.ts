import { ActionTypes, Item, ItemsAction } from "../actions";

export const itemsReducer = (state: Item[] = [], action: ItemsAction) => {
  let id = -1;
  let value = -1;

  switch (action.type) {
    case ActionTypes.incrementItem:
      id = action.payload;
      return state.map(item => {
        if (id === item.id) {
          return { ...state[id], amount: state[id].amount + 1 };
        }
        return item;
      });
    case ActionTypes.decrementItem:
      id = action.payload.id;
      value = action.payload.value;

      return state.map(item => {
        if (id === item.id) {
          const decrementResult = state[id].amount - value;
          return { ...state[id], amount: decrementResult < 0 ? 0 : decrementResult };
        }
        return item;
      });
    default:
      return state;
  }
};
