import { ActionTypes } from "./types";

export interface Item {
  id: number,
  amount: number,
  show: boolean
}

export interface IncrementItemAction {
  type: ActionTypes.incrementItem;
  payload: number;
}
export const incrementItem = (id: number): IncrementItemAction => {
  return {
    type: ActionTypes.incrementItem,
    payload: id
  };
};

export interface DecrementItemAction {
  type: ActionTypes.decrementItem;
  payload: {
    id: number;
    value: number;
  };
}
export const decrementItem = (id: number, value: number): DecrementItemAction => {
  return {
    type: ActionTypes.decrementItem,
    payload: {id, value}
  };
};
