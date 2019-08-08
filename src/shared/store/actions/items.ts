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
