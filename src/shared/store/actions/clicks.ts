import { ActionTypes } from "./types";
import { Dispatch } from "redux";
import { decreaseFoodPoints, DecreaseFoodPointsAction } from "./stats";
import { StoreState } from "../reducers";

const CLICKS_TO_DECREMENT_FOOD_POINT = 10;
const FOOD_POINTS_TO_DECREASE = 1;

export interface ToggleItemClickableAction {
  type: ActionTypes.toggleItemClickable;
}

export interface IncrementClicksCounterAction {
  type: ActionTypes.incrementClicksCounter;
  payload: number;
}
export const incrementClicksCounter = (multiplier: number) => {
  return function(dispatch: Dispatch, getState: () => StoreState) {
    const clicks = getState().clicks;

    if (clicks === CLICKS_TO_DECREMENT_FOOD_POINT) {
      dispatch<ResetClicksCounterAction>(resetClicksCounter());
      dispatch<DecreaseFoodPointsAction>(decreaseFoodPoints(FOOD_POINTS_TO_DECREASE));
    }

    dispatch<IncrementClicksCounterAction>({
      type: ActionTypes.incrementClicksCounter,
      payload: multiplier
    });
  };
};

export interface ResetClicksCounterAction {
  type: ActionTypes.resetClicksCounter;
}
export const resetClicksCounter = (): ResetClicksCounterAction => {
  return {
    type: ActionTypes.resetClicksCounter
  };
};
