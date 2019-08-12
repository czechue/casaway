import { ActionTypes, ClicksCounterAction } from "../actions";

export const clickableReducer = (state: number[] = []) => {
  // switch (action.type) {
  //   case ActionTypes.toggleItemClickable:
  //     const id = action.payload;
  //     const isItemPresent = state.includes(id);
  //     return isItemPresent ? state.filter(item => item !== id) : [...state, id];
  //
  //   default:
  return state;
};

const INITIAL_CLICKS_COUNTER = 0;

export const clicksReducer = (state = INITIAL_CLICKS_COUNTER, action: ClicksCounterAction) => {
  switch (action.type) {
    case ActionTypes.incrementClicksCounter:
      const multiplier = action.payload;
      return state + multiplier;

    case ActionTypes.resetClicksCounter:
      return 0;

    default:
      return state;
  }
};
