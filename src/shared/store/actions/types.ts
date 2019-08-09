import { DecreaseFoodPointsAction, IncreaseFoodPointsAction } from "./stats";
import { DecrementItemAction, IncrementItemAction } from "./items";
import {
  IncrementClicksCounterAction,
  ResetClicksCounterAction,
  ToggleItemClickableAction
} from "./clicks";
import { AddNewOperationAction, UpdateAvaibleOperations } from "./operations";

export enum ActionTypes {
  decreaseFoodPoints,
  increaseFoodPoints,
  incrementItem,
  decrementItem,
  toggleItemClickable,
  incrementClicksCounter,
  resetClicksCounter,
  addNewOperation,
  updateAvaibleOperations
}

export type PlayerStatsAction = DecreaseFoodPointsAction | IncreaseFoodPointsAction;
export type ItemsAction = IncrementItemAction | DecrementItemAction;
export type ItemsClickableAction = ToggleItemClickableAction;
export type ClicksCounterAction = IncrementClicksCounterAction | ResetClicksCounterAction;
export type OperationsAction = AddNewOperationAction | UpdateAvaibleOperations;
